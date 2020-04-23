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
        type: {
          type: String,
          trim: true,
          required: "Please, enter the type of exercise"
        },
        name: {
          type: String,
          trim: true,
          required: "Please, enter your name"
        },
        duration: {
          type: Number,
          required: "Please, enter the exercise duration (minutes)"
        },
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
      }
    ]
  },
  opts
);

// Return a single number, the total duration of the exercises
// Loops through the exercises array and adds the duration of each exercise
// Reduce uses an accumulator and the current value
WorkoutSchema.virtual("totalDuration").get(function () {
  const sum = this.exercises.reduce((accum, curr) => {
    return accum.duration + curr.duration;
  });
  // console.log(sum);
  return sum.duration;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;