const express = require('express');
const cors = require('cors');
const app = express();

const Panier = require('./Panier');
const sequelize = require('./Sequelize');


const port = 4000;

app.use(cors());
app.use(express.json());



sequelize.sync()
  .then(() => {
    console.log('La base de données est synchronisée.');
  })
  .catch((error) => {
    console.error('Erreur lors de la synchronisation de la base de données :', error);
  });

const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		light: 2,
		water: 3,
		cover: "monstera",
		price: 15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: "lyrata",
		price: 16
	},

	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: "pothos",

		price: 9
	},
	{
		name: 'calathea',
		category: 'classique',
		id: '4kk',
		light: 2,
		water: 3,
		cover: "calathea",

		price: 20
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: "olivier",
		price: 25
	},

	{
		name: 'cactus',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: "cactus",
		price: 6
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		light: 2,
		water: 3,
		cover: "basil",
		price: 5
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: "succulent",
		price: 8
	},

	{
		name: 'menthe',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: "mint",
		price: 4
	}
]

app.get('/plantList', (req, res) => {
    res.status(200).json(plantList);
  });

  app.post('/checkout', async (req, res) => {
	const { nom, email, telephone, adresse, listPanier } = req.body;
  
	try {
	  const panier = await Panier.create({
		nom,
		email,
		telephone,
		adresse,
	  });
  
	  
	  await panier.setPlants(listPanier.map((item) => item.plant.id));
  
	  res.status(201).json({ message: 'Validation du panier réussie.' });
	} catch (error) {
	  console.error('Erreur lors de la validation du panier :', error);
	  res.status(500).json({ message: 'Erreur lors de la validation du panier.' });
	}
  });




app.listen(port, ()=>{
    console.log('Serveur en ecoute sur le port ${port}');
});