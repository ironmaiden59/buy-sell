const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const newCarQueries = require('../db/queries/newcar'); 

router.get('/', (req, res) => {
  const username = req.cookies.username || '';
  res.render('postAd', { username: username, currentPath: '/postAd' });
});

router.post('/', async (req, res) => {
  try {
    // Mapping the request data to your database columns
    const carData = {
      name: req.body.name, // Note: This assumes you've changed the input field's name attribute to "name"
      price: req.body.carPrice,
      // You'll need logic to handle the carImage upload to get the image_url
      image_url: 'path_or_url_to_the_uploaded_image', 
      // If you're logging users in, you'll need their user ID. 
      // If not, you can omit this or set a default value.
      user_id: req.cookies.userID || null 
    };
    
    // Save the car data to the database.
    await newCarQueries.insertCar(carData);

    // Redirect to dashboard after posting the car ad.
    res.redirect('/dashboard');

  } catch (error) {
    console.error("Error inserting car:", error);
    res.status(500).send("There was an error posting the car ad.");
  }
});

module.exports = router;