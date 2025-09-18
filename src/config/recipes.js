// List of common recipe flips (expand as needed)
// Format: { name, outputId, inputIds: [id, ...] }

const smithingLevel = 72;

module.exports = [
  {
    name: 'Voidwaker',
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
	outputId: 27641, // Saturated Heart
	input: [
		{name: "Imbued heart", itemId: 20724, quantity: 1},
		{name: "Ancient essence", itemId: 27616, quantity: 150_000}
	]
  },
	{
		name: "Ahrim's hood",
		outputId: 4708,
		input: [
			{ name: "Ahrim's hood (broken)", itemId: 4860, quantity: 1 }
		],
		cashInput: 60000 * (1 - (smithingLevel / 200))
	},
	{
		name: "Ahrim's robetop",
		outputId: 4712,
		input: [
			{ name: "Ahrim's robetop (broken)", itemId: 4872, quantity: 1 }
		],
		cashInput: 90_000 * (1 - (smithingLevel / 200))
	},
	{
		name: "Ahrim's robeskirt",
		outputId: 4714,
		input: [
			{ name: "Ahrim's robeskirt (broken)", itemId: 4878, quantity: 1 }
		],
		cashInput: 80_000 * (1 - (smithingLevel / 200))
	},
	{
		name: "Ahrim's staff",
		outputId: 4710,
		input: [
			{ name: "Ahrim's staff (broken)", itemId: 4866, quantity: 1 }
		],
		cashInput: 100_000 * (1 - (smithingLevel / 200))
	}
];
