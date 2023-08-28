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

router.get("/", (req, res) => {
  
  if (user) {
    // If user is logged in, show the post-login page
    res.redirect("/users/post_login");
  } else {
    // If user is not logged in, show the main page or login page
    res.redirect("/");
  }
});

router.get("/post_login", (req, res) => {
  res.send("This is the post login page.");
});


router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Sample logic (use your actual logic for authentication here)
  if (isValidUser(username, password)) {
    // assuming user authentication is successful
    // Ideally, you would also set a session or token here to keep the user logged in
    res.redirect("/post_login");
  } else {
    res.send("Invalid login credentials");
  }
})
