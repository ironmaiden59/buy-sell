const express = require('express');
const router  = express.Router();

const db = require('../db/connection');
const carQueries = require('../db/queries/cars');


router.get('/:id', (req, res) => {
  const carId = req.params.id;
  carQueries.getCarById(carId)
    .then(car => {
      if (!car) {
        res.status(404).send("Car not found");
        return;
      }
      const username = req.session.username || '';
      res.render("message", { carId: carId, carName: car.name, username: username, currentPath: req.path });
    })
    .catch(err => {
      console.log('error', err);
      res.status(500).send(err.message);
    });
});

module.exports = router;