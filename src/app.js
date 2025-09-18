const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const IndexController = require('./controllers/index');

app.get('/', async (req, res) => {
	try {
		   const [armourSetData, recipeData] = await Promise.all([
			   IndexController.retrieveArmourSetData(),
			   IndexController.retrieveRecipeFlips()
		   ]);

		   res.render('index', { 
			   armourData: armourSetData,
			   recipes: recipeData
		   });
	} catch (err) {
		res.status(500).send('Error fetching prices');
	}
});

app.listen(PORT, () => {
  	console.log(`Server running on http://localhost:${PORT}`);
});
