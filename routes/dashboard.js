const express = require('express');
const router  = express.Router();

const db = require('../db/connection');

const { getAllCars, deleteCar } = require('../db/queries/newcar');

router.get('/', (req, res) => {
  const username = req.session.username || '';

  getAllCars()
    .then(cars => {
      res.render('dashboard', { username: username, newcars: cars, currentPath: req.path });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Server error');
    });
});

router.post('/delete/:id', (req, res) => {

  const carId = req.params.id;
  deleteCar(carId)
      .then(() => {

          res.redirect('/dashboard'); // Redirect to the root/dashboard route
      })
      .catch(err => {
          console.error("Error while deleting:", err.message);
          res.status(500).send('Server error');
      });
});

module.exports = router;
