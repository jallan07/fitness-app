let db = require('../models');

module.exports = (app) => {
  //TODO create the api routes

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
