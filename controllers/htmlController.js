const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../models");

// HTML GET ROUTES

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
  router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  
  router.get("/stats", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  module.exports = router;