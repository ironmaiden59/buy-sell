/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const path = require('path');

const user = true;

router.get('/', (req, res) => {
  const username = req.cookies.username || '';
  res.render('/', { username: username });
});






module.exports = router;
