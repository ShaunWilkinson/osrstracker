// List of OSRS armour sets and their components
const armourSets = [
	// Iron
	{ name: 'Iron set (lg)', setId: '12972', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['1115', '1067', '1133', '1191'] },
	{ name: 'Iron set (sk)', setId: '12974', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['1115', '1081', '1133', '1191'] },
	{ name: 'Iron trimmed set (lg)', setId: '12976', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['12225', '12227', '12223', '12221'] },
	{ name: 'Iron trimmed set (sk)', setId: '12978', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['12225', '12229', '12223', '12221'] },
	// Steel
	{ name: 'Steel set (lg)', setId: '13000', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['1119', '1069', '1141', '1193'] },
	{ name: 'Steel set (sk)', setId: '13002', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['1119', '1083', '1141', '1193'] },
	{ name: 'Steel gold-trimmed set (lg)', setId: '20382', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['20169', '20171', '20167', '20173'] },
	{ name: 'Steel gold-trimmed set (sk)', setId: '20385', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['20169', '20175', '20167', '20173'] },
	// Black
	{ name: 'Black set (lg)', setId: '12988', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['1125', '1077', '1165', '1195'] },
	{ name: 'Black set (sk)', setId: '12990', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['1125', '1089', '1165', '1195'] },
	{ name: 'Black gold-trimmed set (lg)', setId: '12996', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['2591', '2593', '2595', '2597'] },
	{ name: 'Black gold-trimmed set (sk)', setId: '12998', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['2591', '3473', '2595', '2597'] },
	// Mithril
	{ name: 'Mithril set (lg)', setId: '13000', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['1121', '1071', '1159', '1197'] },
	{ name: 'Mithril set (sk)', setId: '13002', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['1121', '1085', '1159', '1197'] },
	{ name: 'Mithril gold-trimmed set (lg)', setId: '13008', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['12277', '12279', '12275', '12281'] },
	{ name: 'Mithril gold-trimmed set (sk)', setId: '13010', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['12277', '12285', '12275', '12281'] },
	// Adamant
	{ name: 'Adamant set (lg)', setId: '13012', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['1123', '1073', '1145', '1199'] },
	{ name: 'Adamant set (sk)', setId: '13014', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['1123', '1091', '1145', '1199'] },
	{ name: 'Adamant gold-trimmed set (lg)', setId: '13020', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['2607', '2609', '2605', '2611'] },
	{ name: 'Adamant gold-trimmed set (sk)', setId: '13022', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['2607', '3475', '2605', '2611'] },
	// Rune
	{ name: 'Rune armour set (lg)', setId: '13024', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['1127', '1079', '1163', '1201'] },
	{ name: 'Rune armour set (sk)', setId: '13026', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['1127', '1093', '1163', '1201'] },
	{ name: 'Rune gold-trimmed set (lg)', setId: '13032', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['2615', '2617', '2619', '2621'] },
	{ name: 'Rune gold-trimmed set (sk)', setId: '13034', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['2615', '3476', '2619', '2621'] },
	// Gilded
	{ name: 'Gilded armour set (lg)', setId: '13036', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['3488', '3486', '3488', '3488'] },
	{ name: 'Gilded armour set (sk)', setId: '13038', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['3488', '3488', '3486', '3488'] },
	// Dragon
	{ name: 'Dragon armour set (lg)', setId: '21882', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['21892', '4087', '11335', '21895'] },
	{ name: 'Dragon armour set (sk)', setId: '21885', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['21892', '4585', '11335', '21895'] },
	// Justiciar
	{ name: 'Justiciar armour set', setId: '22438', items: ['Faceguard', 'Chestguard', 'Legguards'], itemIds: ['22326', '22327', '22328'] },
	// Torva
	{ name: 'Torva armour set', setId: '31145', items: ['Full helm', 'Platebody', 'Platelegs'], itemIds: ['26382', '26384', '26386'] },
	// Bandos
	{ name: 'Bandos rune armour set (lg)', setId: '13056', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['12480', '12482', '12486', '12488'] },
	{ name: 'Bandos rune armour set (sk)', setId: '13058', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['12480', '12484', '12486', '12488'] },
	// Armadyl
	{ name: 'Armadyl rune armour set (lg)', setId: '13052', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['12470', '12472', '12476', '12478'] },
	{ name: 'Armadyl rune armour set (sk)', setId: '13054', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['12470', '12474', '12476', '12478'] },
	// Ancient
	{ name: 'Ancient rune armour set (lg)', setId: '13060', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['12460', '12462', '12466', '12468'] },
	{ name: 'Ancient rune armour set (sk)', setId: '13062', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['12460', '12464', '12466', '12468'] },
	// Guthix
	{ name: 'Guthix armour set (lg)', setId: '13048', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['2669', '2671', '2673', '2675'] },
	{ name: 'Guthix armour set (sk)', setId: '13050', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['2669', '3480', '2673', '2675'] },
	// Saradomin
	{ name: 'Saradomin armour set (lg)', setId: '13040', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['2661', '2663', '2665', '2667'] },
	{ name: 'Saradomin armour set (sk)', setId: '13042', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['2661', '3479', '2665', '2667'] },
	// Zamorak
	{ name: 'Zamorak armour set (lg)', setId: '13044', items: ['Platebody', 'Platelegs', 'Full helm', 'Kiteshield'], itemIds: ['2653', '2655', '2657', '2659'] },
	{ name: 'Zamorak armour set (sk)', setId: '13046', items: ['Platebody', 'Plateskirt', 'Full helm', 'Kiteshield'], itemIds: ['2653', '3478', '2657', '2659'] }
];

module.exports = armourSets;