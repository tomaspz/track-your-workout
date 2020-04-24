const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://user1:password1@ds139619.mlab.com:39619/heroku_7301w9z9",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});