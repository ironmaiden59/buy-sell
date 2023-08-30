const express = require('express');
const router  = express.Router();
const db = require('../db/connection');


router.get('/', (req, res) => {
  const username = req.cookies.username || '';
  res.render('postAd', { username: username, currentPath: '/postAd' });
});

// New POST route to handle the form submission
router.post('/', (req, res) => {
  

  console.log(req.body);  // Log the form data for debugging purposes
  res.send('Car ad submitted successfully!');

  // Eventually, you'd likely want to redirect the user to another page, 
  // handle errors, etc., instead of just sending a message.
});

module.exports = router;