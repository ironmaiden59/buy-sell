const express = require('express');
const router = express.Router();
const carQueries = require('../db/queries/cars');

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

router.get('/', (req, res) => {
  carQueries.getCars()
    .then(cars => {
      res.render('index', { cars });
    })
    .catch(err => {
      res
        .status(500)
        .send(err.message);
    });
});

module.exports = router;
