const express = require('express');
const multer = require('multer');
const router  = express.Router();
const db = require('../db/connection');
const newCarQueries = require('../db/queries/newcar'); 

// Setting up storage using multer's diskStorage method
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './image/');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

// Filter to check file type
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5  // Limiting to 5MB
  },
  fileFilter: fileFilter
});


router.get('/', (req, res) => {
  const username = req.cookies.username || '';
  res.render('postAd', { username: username, currentPath: '/postAd' });
});

router.post('/', upload.single('carImage'), async (req, res) => {
  try {
    console.log(req.body);
    // Mapping the request data to your database columns
    const carData = {
      name: req.body.name, // Note: This assumes you've changed the input field's name attribute to "name"
      price: req.body.carPrice,
      year: req.body.carYear,
      image_url: req.file.path,
      user_id: 2
       
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