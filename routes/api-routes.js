const db = require('../models');
const mongojs = require('mongojs');

module.exports = (app) => {
  //TODO create the api routes
  //get all workouts for home page
  app.get('/api/workouts', (req, res) => {
    db.Workouts.find({}).then((workouts) => {
      res.json(workouts);
    });
  });
  // get all workouts for workout dashboard
  app.get('/api/workouts/range', (req, res) => {
    db.Workouts.find({}).then((workouts) => {
      res.json(workouts);
    });
  });

  // create a workout
  app.post('/api/workouts', (req, res) => {
    db.Workouts.create(req.body)
      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => {
        if (err) console.log(err);
      });
  });

  // get and then update a workout
  app.get('/exercise:?id', (req, res) => {
    let workoutID = mongojs.ObjectId(req.query.id);
    console.log(workout._id);
    app.put('/api/workouts', (req, res) => {
      db.Workouts.update({ _id: workoutID });
    });
  });
};
