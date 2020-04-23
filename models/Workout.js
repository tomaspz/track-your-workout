const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: String,
        trim: true,
        required: "You must enter the type of exercise"
      },
      {
        name: String,
        trim: true,
        required: "You must enter your name"
      },
      {
        duration: Number,
        required: "You must enter the exercise duration (minutes)"
      },
      {
        weight: Number
      },
      {
        reps: Number
      },
      {
        sets: Number
      },
      {
        distance: Number
      }
    ]
  },
  opts
);

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
