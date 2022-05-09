const express = require("express");
const router = express.Router();
const { createScooter } = require("../controller/scooterController");

// define the home page route
router.post("/scooter", createScooter);

// define the about route
router.delete("/", (req, res) => {
  res.send("Delete Scooter Data");
});

module.exports = router;
