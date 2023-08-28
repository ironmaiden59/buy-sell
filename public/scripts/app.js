// // Client facing scripts here

// const express = require('express');
// const router  = express.Router();
// const path = require('path');

// app.get('/', function(req, res) {
//   let cars = [
//       // Example data
//       {
//           imagePath: 'path/to/car/image1.jpg',
//           altText: 'Car Description'
//           model: 'Model 1',
//           year: 2020
//       },
//       {
//           imagePath: 'path/to/car/image2.jpg',
//           altText: 'Car Description'
//           model: 'Model 2',
//           year: 2021
//       }
//       // Add more cars as needed
//   ];

// //login form
// app.get("/login", (req, res) => {
//   // Check if the user is already logged in
//   if (users[req.session.user_id]) {
//     res.redirect("/urls");
//     return;
//   }

//   const templateVars = {
//     user: users[req.session.user_id]
//   };
//   res.render("urls_login", templateVars);
// });

// //register form
// app.get("/register", (req, res) => {
//   // Check if the user is already logged in
//   if (users[req.session.user_id]) {
//     res.redirect("/urls");
//     return;
//   }

//   let templateVars = { user: null };
//   res.render("urls_registration", templateVars);
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });