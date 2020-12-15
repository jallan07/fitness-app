let db = require('../models');

module.exports = (app) => {
  //TODO create the api routes
  //get all workouts for home page
  app.get('/api/workouts', (req, res) => {
    db.Workouts.find({}).then(function (workouts) {
      res.json(workouts);
    });
  });
  // get all workouts for workout dashboard
  app.get('/api/workouts/range', (req, res) => {
    db.Workouts.find({}).then(function (workouts) {
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
  //
};
