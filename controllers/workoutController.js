const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../models");

// API GET ROUTES

router.get("/api/workouts", (req,res) => {
    db.Workout.find({})
    .then(workout => {
        console.log(workout);
        res.json(workout);
    })
    .catch( err => {
        console.log(err);
        res.json(err);
    })
});

router.get("/api/workouts/:id", (req,res) => {

    db.Workout.findById(req.params.id)
    .populate("exercises")
    .then(workout =>{
        res.json(workout);
    })
    .catch( err => {
        console.log(err);
        res.json(err);
    })

});

router.get("/api/workouts/range", (req,res) => {
    db.Workout.find({}).then(workout => {
        res.json(workout);
    }).catch (err => {
        res.json(err);
    })
});

// API POST ROUTES

router.post("/api/workouts", (req,res) => {

    db.Workout.create(req.body).then(newWorkout => {
        res.json(newWorkout);
    }).catch(err =>{
        res.status(500);
        res.json(err);
    })
});

// API UPDATE ROUTES

router.put("/api/workouts/:id", (req,res) => {

    db.Workout.findByIdAndUpdate({_id: req.params.id})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err =>{
        res.json(err);
    })
}); 

// API DELETE ROUTES

router.delete("/api/workouts/:id", function(req,res){

  db.Workout.remove({ _id: req.params.id }, (err, doc) => {
    if(err) throw err;
    res.json(doc);
  });
});

module.exports = router;