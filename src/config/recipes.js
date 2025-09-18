
// List of common recipe flips (expand as needed)
// Format: { name, outputId, inputIds: [id, ...] }

const smithingLevel = 72;

module.exports = [
	{
		name: 'Voidwaker',
		type: 'Crafting',
		outputId: 27690, // Voidwaker
		input: [
			{name: "Voidwaker blade", itemId: 27684, quantity: 1},
			{name: "Voidwaker hilt", itemId: 27681, quantity: 1},
			{name: "Voidwaker gem", itemId: 27687, quantity: 1}
		],
		cashInput: 500_000
	},
	{
		name: 'Saturated Heart',
		type: 'Crafting',
		outputId: 27641, // Saturated Heart
		input: [
			{name: "Imbued heart", itemId: 20724, quantity: 1},
			{name: "Ancient essence", itemId: 27616, quantity: 150_000}
		]
	},
	// --- Dharok's ---
	{
		name: "Dharok's helm",
		type: 'Repairing Barrows',
		outputId: 4716,
		input: [
			{ name: "Dharok's helm (broken)", itemId: 4884, quantity: 1 }
		],
		cashInput: 60000 * (1 - (smithingLevel / 200))
	},
	{
		name: "Dharok's platebody",
		type: 'Repairing Barrows',
		outputId: 4720,
		input: [
			{ name: "Dharok's platebody (broken)", itemId: 4896, quantity: 1 }
		],
		cashInput: 90000 * (1 - (smithingLevel / 200))
	},
	{
		name: "Dharok's platelegs",
		type: 'Repairing Barrows',
		outputId: 4722,
		input: [
			{ name: "Dharok's platelegs (broken)", itemId: 4902, quantity: 1 }
		],
		cashInput: 80000 * (1 - (smithingLevel / 200))
	},
	{
		name: "Dharok's greataxe",
		type: 'Repairing Barrows',
		outputId: 4718,
		input: [
			{ name: "Dharok's greataxe (broken)", itemId: 4890, quantity: 1 }
		],
		cashInput: 100000 * (1 - (smithingLevel / 200))
	},
	{
		name: "Ahrim's hood",
		type: 'Repairing Barrows',
		outputId: 4708,
		input: [
			{ name: "Ahrim's hood (broken)", itemId: 4860, quantity: 1 }
		],
		cashInput: 60000 * (1 - (smithingLevel / 200))
	},
	{
		name: "Ahrim's robetop",
		type: 'Repairing Barrows',
		outputId: 4712,
		input: [
			{ name: "Ahrim's robetop (broken)", itemId: 4872, quantity: 1 }
		],
		cashInput: 90_000 * (1 - (smithingLevel / 200))
	},
	{
		name: "Ahrim's robeskirt",
		type: 'Repairing Barrows',
		outputId: 4714,
		input: [
			{ name: "Ahrim's robeskirt (broken)", itemId: 4878, quantity: 1 }
		],
		cashInput: 80_000 * (1 - (smithingLevel / 200))
	},
	{
		name: "Ahrim's staff",
		type: 'Repairing Barrows',
		outputId: 4710,
		input: [
			{ name: "Ahrim's staff (broken)", itemId: 4866, quantity: 1 }
		],
		cashInput: 100_000 * (1 - (smithingLevel / 200))
	}
];
