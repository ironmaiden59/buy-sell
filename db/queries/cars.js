const db = require('../connection');

const getCars = () => {
  return db.query('SELECT * FROM cars;')
    .then(data => data.rows);
};

const getCarById = (id) => {
  return db.query('SELECT * FROM cars WHERE id = $1;', [id])
    .then(data => data.rows[0]);
};

const getFavourites = (userId) => {
  const query = `SELECT * FROM favourites
  INNER JOIN cars ON favourites.car_id = cars.id
  WHERE favourites.user_id = $1`;
  return db.query(query, [userId])
    .then(data => data.rows);
};

const addFavourites = (userId, carId) => {
  const query = `INSERT INTO favourites (user_id, car_id)
    VALUES ($1, $2)`;
  return db.query(query, [userId, carId]);
};

const removeFavourites = (userId, carId) => {
  const query = `DELETE FROM favourites WHERE user_id = $1 AND car_id = $2`;
  return db.query(query, [userId, carId]);
};

module.exports = { getCars, getFavourites, addFavourites, removeFavourites, getCarById };
