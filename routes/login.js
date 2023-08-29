const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
  const username = req.cookies.username || '';
  res.render("login", { username: username });
});

// POST endpoint for /login
router.post('/', (req, res) => {
  const { email } = req.body; // Extract the email from the request body

  // Set the cookie named 'username' with the email value
  res.cookie('username', email);

  // Redirect to the home page
  res.redirect('/');
});

module.exports = router;
