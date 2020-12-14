const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // exercise type
  type: {
    type: String
  },
  // exercise name
  name: {
    type: String
  },
  // weight
  weight: {
    type: Number
  },
  // sets
  sets: {
    type: Number
  },
  // reps
  reps: {
    type: Number
  },
  // duration
  duration: {
    type: Number
  },
  // distance
  distance: {
    type: Number
  }
});

const Workout = mongoose.model('Workout', WorkoutSchema);
module.exports = Workout;
