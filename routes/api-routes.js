const { db } = require('../models/Workout.js');

module.exports = (app) => {
  // create a workout
  app.post('/api/workouts', ({ body }, res) => {
    db.Workout.create({ body })
      .then((workout) => {
        console.log(workout);
      })
      .catch((err) => {
        if (err) console.log(err);
      });
  });
};
