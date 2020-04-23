const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

const Workout = require("./models/index");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    { useNewUrlParser: true }
  );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(morgan("dev"));

const workoutRoutes = require("./controllers/workoutController.js");
const htmlRoutes = require("./controllers/htmlController.js");
app.use(workoutRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});