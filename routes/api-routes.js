let db = require('../models');

module.exports = (app) => {
  //TODO create the api routes

  //get all workouts
  app.get('/api/workouts', (req, res) => {
    db.Workouts.find({}).then((workouts) => res.json(workouts));
  });

  // create a workout
  app.post('/api/workouts', ({ body }, res) => {
    db.Workouts.create({ body })
      .then((workout) => {
        console.log(workout);
      })
      .catch((err) => {
        if (err) console.log(err);
      });
  });

  //
};
