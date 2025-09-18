const recipes = require('../config/recipes');


const axios = require('axios');
const { formatDistanceToNow } = require('date-fns');

const armourSets = require('../config/armourSets');

class IndexController {

	async retrieveRecipeFlips() {
		// Gather all unique recipe item IDs (inputs and outputs)
		const allRecipeIds = [];
		for (const r of recipes) {
			allRecipeIds.push(r.outputId);
			for (const iid of r.input) allRecipeIds.push(iid.itemId);
		}
		const uniqueIds = [...new Set(allRecipeIds)];
		const prices = await this.fetchApiData(uniqueIds);

		const recipesOutput = recipes.map(recipe => {
			const output = prices[recipe.outputId] || {};
			const inputs = recipe.input.map(item => prices[item.itemId] || {});

			const geLowPrice = output.low || 0;
			const geLowPriceTime = output.lowTime ? formatDistanceToNow(new Date(output.lowTime * 1000), { addSuffix: true }) : 'N/A';
			const geHighPrice = output.high || 0;
			const geHighPriceTime = output.highTime ? formatDistanceToNow(new Date(output.highTime * 1000), { addSuffix: true }) : 'N/A';

			const volume = output.highPriceVolume || 0;
			const volumeTime = output.highTime ? formatDistanceToNow(new Date(output.highTime * 1000), { addSuffix: true }) : 'N/A';

			const inputTotalLow = recipe.input.reduce((sum, item) => {
				const p = prices[item.itemId] || {};
				return sum + (item.quantity * (p.low || 0));
			}, 0);
			const inputTotalHigh = recipe.input.reduce((sum, item) => {
				const p = prices[item.itemId] || {};
				const highValue = p.high < p.low ? p.low : p.high; // Correct any outdated prices
				return sum + (item.quantity * (highValue || 0));
			}, 0);

			const missing = !geHighPrice || inputs.some(i => !i.low);
			const cashInput = recipe.cashInput || 0;

			const profitHigh = missing ? 'N/A' : geHighPrice - inputTotalLow - cashInput;
			const profitLow = missing ? 'N/A' : geLowPrice - inputTotalHigh - cashInput;

			const profitPercentHigh = missing ? null : (profitHigh / inputTotalLow) * 100;
			const profitPercentLow = missing ? null : (profitLow / inputTotalHigh) * 100;

			// Item breakdown for UI
			const items = recipe.input.map((item, idx) => {
				const p = prices[item.itemId] || {};
				return {
					id: item.itemId,
					name: item.name || `Item ${item.itemId}`,
					quantity: item.quantity,
					low: p.low || 0,
					high: p.high < p.low ? p.low : p.high || 0,
					lowVolume: p.lowPriceVolume || 0,
					highVolume: p.highPriceVolume || 0,
					lowTime: p.lowTime ? formatDistanceToNow(new Date(p.lowTime * 1000), { addSuffix: true }) : 'N/A',
					highTime: p.highTime ? formatDistanceToNow(new Date(p.highTime * 1000), { addSuffix: true }) : 'N/A',
					outdatedWarning: p.high < p.low ? true : false
				};
			});

			// If there's a cash input, add it as a separate item
			if (cashInput) {
				items.push({
					id: 'cash',
					name: 'Coins',
					low: cashInput,
					high: cashInput,
					lowVolume: null,
					highVolume: null,
					lowTime: 'N/A',
					highTime: 'N/A'
				});
			}

			return {
				name: recipe.name,
				type: recipe.type || 'N/A',
				geLowPrice,
				geLowPriceTime,
				geHighPrice,
				geHighPriceTime,
				volume,
				volumeTime,
				profitHigh,
				profitPercentHigh,
				profitLow,
				profitPercentLow,
				items
			};
		});

		return recipesOutput.sort((a, b) => {
			// Sort by profitPercentHigh descending, then profitHigh descending
			if (b.profitPercentHigh === a.profitPercentHigh) {
				return (b.profitHigh || 0) - (a.profitHigh || 0);
			}
			return (b.profitPercentHigh || 0) - (a.profitPercentHigh || 0);
		});
	}

	// Helper to fetch prices for a list of item IDs
	// Acceptable Use Policy: Always set a descriptive User-Agent header!
	// If you need many items, fetch all prices and filter locally.
	// Always request the entire latest list and filter locally
	async fetchApiData(ids) {
		// Fetch latest prices
		const urlLatest = 'https://prices.runescape.wiki/api/v1/osrs/latest';
		const url24h = 'https://prices.runescape.wiki/api/v1/osrs/24h';
		const headers = {
			'User-Agent': 'OSRS Armour Set Profit Calculator - shaun@swilkinson.online'
		};
		const [latestRes, volRes] = await Promise.all([
			axios.get(urlLatest, { headers }),
			axios.get(url24h, { headers })
		]);
		const latestData = latestRes.data.data;
		const volData = volRes.data.data;
		const filtered = {};
		for (const id of ids) {
			filtered[id] = {
				...(latestData[id] || {}),
				highPriceVolume: volData[id]?.highPriceVolume || 0,
				lowPriceVolume: volData[id]?.lowPriceVolume || 0
			};
		}
		return filtered;
	}

	async retrieveArmourSetData() {
		// Gather all item IDs (sets and components)
		const allIds = [
			...armourSets.map(s => s.setId),
			...armourSets.flatMap(s => s.itemIds)
		];
		const prices = await this.fetchApiData(allIds);

		// Calculate margins and profits
		const results = armourSets.map(set => {
			const setPrice = prices[set.setId]?.high || 0;
			const setPriceTime = prices[set.setId]?.highTime ? formatDistanceToNow(new Date(prices[set.setId].highTime * 1000), { addSuffix: true }) : 'N/A';
			const setLow = prices[set.setId]?.low || 0;
			const setLowTime = prices[set.setId]?.lowTime ? formatDistanceToNow(new Date(prices[set.setId].lowTime * 1000), { addSuffix: true }) : 'N/A';
			const setPriceVolume = prices[set.setId]?.highPriceVolume || 0;
			const setLowVolume = prices[set.setId]?.lowPriceVolume || 0;
			const itemTotalHigh = set.itemIds.reduce((sum, id) => sum + (prices[id]?.high || 0), 0);

			// Find the oldest highTime among unpacked items
			const oldestHighTime = Math.min(...set.itemIds.map(id => prices[id]?.highTime || Infinity));
			const itemTotalHighTime = (oldestHighTime !== Infinity && oldestHighTime > 0)
				? formatDistanceToNow(new Date(oldestHighTime * 1000), { addSuffix: true })
				: 'N/A';
			const itemTotalLow = set.itemIds.reduce((sum, id) => sum + (prices[id]?.low || 0), 0);

			// Find the oldest lowTime among unpacked items
			const oldestLowTime = Math.min(...set.itemIds.map(id => prices[id]?.lowTime || Infinity));
			const itemTotalLowTime = (oldestLowTime !== Infinity && oldestLowTime > 0)
				? formatDistanceToNow(new Date(oldestLowTime * 1000), { addSuffix: true })
				: 'N/A';

			// Gather item details for modal/popover
			const items = set.itemIds.map((id, idx) => ({
				name: set.items[idx],
				high: prices[id]?.high || 0,
				highVolume: prices[id]?.highPriceVolume || 0,
				low: prices[id]?.low || 0,
				lowVolume: prices[id]?.lowPriceVolume || 0,
				highTime: prices[id]?.highTime ? formatDistanceToNow(new Date(prices[id].highTime * 1000), { addSuffix: true }) : 'N/A',
				lowTime: prices[id]?.lowTime ? formatDistanceToNow(new Date(prices[id].lowTime * 1000), { addSuffix: true }) : 'N/A',

				highPriceVolume: prices[id]?.highPriceVolume || 0,
				lowPriceVolume: prices[id]?.lowPriceVolume || 0
			}));

			// Check for missing price data
			const missingPrice = items.some(item => item.high === 0 || item.low === 0);

			let profit = setLow - itemTotalHigh;
			let sellPack = true;
			if (profit < 0) {
				sellPack = false;
				profit = -profit;
			}

			return {
				name: set.name,
				setPrice,
				setLow,
				setPriceVolume,
				setLowVolume,
				itemTotalHigh,
				itemTotalLow,
				setPriceTime,
				setLowTime,
				itemTotalHighTime,
				itemTotalLowTime,
				profit: missingPrice ? 'No price data' : profit,
				sellPack,
				items,
				missingPrice
			};
		});

		// Sort results by profit percentage descending
		results.sort((a, b) => (b.setPrice / b.itemTotalHigh) - (a.setPrice / a.itemTotalHigh));
		return results;
	}
}

module.exports = new IndexController();