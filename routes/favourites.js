const express = require('express');
const router = express.Router();
const carQueries = require('../db/queries/cars');

router.get('/', async (req, res) => {
  try {
    const userId = req.session.user_id;
    const favouriteCars = await carQueries.getFavourites(userId);
    console.log('cars', favouriteCars);
    const username = req.session.username || '';
    res.render('favourites', { favouriteCars, username, currentPath: req.path });
  } catch (error) {
    console.error('Error occurred', error);
    res.status(500).json({ error: 'Error occurred' });
  }
});

router.get('/fetchFavourites', async (req, res) => {
  try {
    const userId = req.session.user_id;
    const query = `SELECT * FROM favourites
    INNER JOIN cars ON favourites.car_id = cars.id
    WHERE favourites.user_id = $1`;
    const { rows } = await carQueries.query(query, [userId]);
    res.status(200).json({ favouriteCars: rows });
  } catch (error) {
    console.error('Error occurred');
    res.status(500).json({ error: 'Error occurred' });
  }
});

router.get('/addFavourites/:carId', async (req, res) => {
  try {
    const userId = req.session.user_id;
    const { carId } = req.params;
    console.log('hello world', userId, carId);
    console.log(await carQueries.addFavourites(userId, carId));
    res.redirect('/');
  } catch (error) {
    console.log(error);
    console.error('Car not added to favourites');
    res.status(500).json({ error: 'Error occurred.' });
  }
});

router.get('/removeFavourites/:carId', async (req, res) => {
  try {
    const userId = req.session.user_id;
    const { carId } = req.params;
    console.log('hello world', userId, carId);
    console.log(await carQueries.removeFavourites(userId, carId));
    res.redirect('/favourites');
  } catch (error) {
    res.status(500).json({ error: 'Error occurred.' });
  }
});

module.exports = router;
