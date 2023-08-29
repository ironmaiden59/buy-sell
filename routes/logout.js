const express = require('express');
const router  = express.Router();


router.post('/', (req, res) => {
  res.clearCookie('username');
  res.redirect('/');
});

module.exports = router;