const express = require('express');
const router  = express.Router();
const db = require('../db/connection');


router.get('/', (req, res) => {
  const username = req.cookies.username || '';
  res.render('dashboard', { username: username });
});

module.exports = router;