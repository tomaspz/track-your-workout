const Workout = require("../models/Workout");

module.exports = function (app) {

    // GET ROUTES

    app.get("api/workouts", (req, res) => {
        console.log(req);
        Workout.find({})
            .then(data => {
                res.json(data);
            }).catch(err => {
                res.json(err);
            });
    });

    app.get("api/workouts/range", (req, res) => {
        Workout.find({})
            .sort({day: 'asc'})
            .limit(7)
            .then(data => {
                res.json(data);
            }).catch(err => {
                res.json(err);
            });
    })

    // POST ROUTES

    app.post("/api/workouts", ({body}, res) => {
        Workout.create(body)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/api/workouts/range", (req, res) => {
        Workout.create({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // PUT ROUTES

    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(
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