require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "fancy-todo",
    "host": "localhost",
    "dialect": "postgres"
  }
}
