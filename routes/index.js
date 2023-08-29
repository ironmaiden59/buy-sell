const express = require('express');
const router = express.Router();
const carQueries = require('../db/queries/cars');

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

router.get('/', (req, res) => {
  console.log(req.query.sortOrder);
  carQueries.getCars()
    .then(cars => {
      let sortedCars = cars
      if (req.query.sortOrder === 'ASC') {
        sortedCars = cars.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      }
      const username = req.cookies.username || '';
      console.log(cars);
      res.render('index', { cars: sortedCars, sortOrder: req.query.sortOrder, username: username, currentPath: req.path });
    })
    .catch(err => {
      res
        .status(500)
        .send(err.message);
    });
});

module.exports = router;
