const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: new Date(),
  exercises: [
    {
      type: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
    }
  ]
});

const Workouts = mongoose.model('Workouts', WorkoutSchema);
module.exports = Workouts;
