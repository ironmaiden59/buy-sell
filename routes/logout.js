const express = require('express');
const router  = express.Router();


router.post('/', (req, res) => {
  res.clearCookie('username');
  res.redirect('/login'); // Assuming you redirect to the login route after logout.
});

module.exports = router;