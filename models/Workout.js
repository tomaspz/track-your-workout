const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now()
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
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  { 
    toJSON: { 
      virtuals: true 
    } 
  });

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