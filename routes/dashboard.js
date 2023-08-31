const express = require('express');
const router  = express.Router();
const db = require('../db/connection');


const { getAllCars } = require('../db/queries/newcar');

router.get('/', (req, res) => {
  const username = req.cookies.username || '';
  
  getAllCars()
    .then(cars => {
      res.render('dashboard', { username: username, cars: cars });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Server error');
    });
});

module.exports = router;