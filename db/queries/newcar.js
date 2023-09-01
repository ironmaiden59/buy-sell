const db = require('../connection');

// Function to retrieve all cars
const getAllCars = () => {
  return db.query('SELECT * FROM newcars;')
    .then(data => {
      return data.rows;
    });
};

// Function to insert a new car
const insertCar = (car) => {
  const { name, price, image_url, user_id } = car;

  return db.query(
    'INSERT INTO newcars (name, price, image_url, user_id) VALUES ($1, $2, $3, $4) RETURNING *;',
    [name, price, image_url, user_id]
  );
};

function deleteCar(id) {
  return db.query('DELETE FROM newcars WHERE id = $1', [id]);
}

module.exports = { getAllCars, insertCar, deleteCar };
