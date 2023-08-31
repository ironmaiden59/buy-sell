const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const userQueries = require('../db/queries/users');
const bcrypt = require("bcryptjs");


router.get('/', (req, res) => {
  const username = req.session.username || '';
  res.render("login", { username });
});

router.post('/', (req, res) => {
  const { email } = req.body;
  userQueries.getUserByEmail(email)
    .then(users => {
      console.log('users', users);
      console.log('email', email);
      if (users) {
        console.log(users.password);
        if (!bcrypt.compareSync(req.body.password, users[0].password)) {
          return res.status(400).send("HTTP ERROR 400: Invalid credentials.");
        }
        req.session.username = email;
        req.session.user_id = users[0].id;
        res.redirect('/');
      } else {
        return res.status(400).send('Invalid credentials');
      }
    });

});

module.exports = router;
