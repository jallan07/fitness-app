// ============
// GENERAL
// ============
// app dependencies
const express = require('express');
const app = express();
const mongojs = require('mongojs');
const logger = require('morgan');

// establish the database
const databaseUrl = 'warmup';
const collections = ['books'];
const db = mongojs(databaseUrl, collections);

// set the port variable
const PORT = process.env.PORT || 3030;

// general middleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use static files middleware
app.use(express.static('public'));

// ============
// ROUTES
// ============
// homepage
app.get('/', (req, res) => {
  res.render(index);
});

// ============
// SERVER
// ============
// start the server
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
