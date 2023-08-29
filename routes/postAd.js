const express = require('express');
const router  = express.Router();
const db = require('../db/connection');


router.get('/', (req, res) => {
  const username = req.cookies.username || '';
  res.render('postAd', { username: username, currentPath: '/postAd' });
});

module.exports = router;