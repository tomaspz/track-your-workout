const db = require("../models");

module.exports = function (app) {

    // GET ROUTES

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(data => {
                // console.log(data); data is an array of objects
                res.json(data);
            }).catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .limit(7)
            .then(data => {
                res.json(data);
            }).catch(err => {
                res.json(err);
            });
    })

    // POST ROUTES

    app.post("/api/workouts", ({body}, res) => {
        db.Workout.create(body)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/api/workouts/range", (req, res) => {
        db.Workout.create({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // PUT ROUTES

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
          req.params.id,
          { $push: { exercises: req.body } },
        )
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
      });
    
}; // end module.exports