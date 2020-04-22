const express = require("express");
const router = express.Router();
const axios = require('axios');

const db = require("../models");

// HTML GET ROUTES

router.get("/", function (req, res) {
  res.render("index.html");
});

router.get("/exercise", function (req, res) {
  res.render("exercise.html");
});

router.get("/stats", function (req, res) {
  res.render("stats.html");
});

// API GET ROUTES

router.get("/api/workouts", (req,res) => {
    // getLastWorkout()
    // addExercise(data)
    // createWorkout(data = {})
});

router.get("/api/workouts/:id", (req,res) => {
    // getLastWorkout()
    // addExercise(data)
    // createWorkout(data = {})
});;

router.get("/api/workouts/range", (req,res) => {
    // getWorkoutsInRange()
});

// API POST ROUTES

router.post("/api/workputs", (req,res) => {

});

router.post("/api/workputs/:id", (req,res) => {

});

// API UPDATE ROUTES


// API DELETE ROUTES

router.delete("/api/workouts/:id", function(req,res){

  db.Workout.remove({ _id: req.params.id }, (err, doc) => {

  });
});

// db.Workout.create({ name: "Campus Library" })
//   .then(dbLibrary => {
//     console.log(dbLibrary);
//   })
//   .catch(({message}) => {
//     console.log(message);
//   });

// app.post("/submit", ({body}, res) => {
//   db.Book.create(body)
//     .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/books", (req, res) => {
//   db.Book.find({})
//     .then(dbBook => {
//       res.json(dbBook);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/populated", (req, res) => {
//   db.Library.find({})
//     .populate("books")
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

module.exports = router;