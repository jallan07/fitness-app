// ============================
// GENERAL
// ============================
// app dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');

// set the port variable
const PORT = process.env.PORT || 3030;

// ============================
// DATABASE
// ============================
//TODO require the models folder
const db = require('./models');

//TODO establish a connection to the database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitnessDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// ============================
// MIDDLEWARE
// ============================
// general middleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use static files middleware
app.use(express.static('public'));

// ============================
// ROUTES
// ============================
require('./routes/html-routes')(app);
require('./routes/api-routes')(app);

// ============================
// SERVER
// ============================
// start the server
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
