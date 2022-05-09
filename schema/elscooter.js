const mongoose = require("mongoose");

const scooterSchema = new mongoose.Schema(
  {
    sensorID: { type: Number, required: true },
    useTime: { type: Number, required: true, max: 18000, min: 0 }, // Seconds max 3600s (60 min * 5)
    distance: { type: Number, required: true, min: 0, max: 100000 }, // Meters max 100 000m (20 km * 5)
    batteryEnd: { type: Number, required: true }, // % at 09:00
    dateRegistered: { type: Date, required: true },
    averageSpeed: { type: Number, required: true },
  },
  { collection: "scooters" }
);

module.exports = mongoose.model("Scooter", scooterSchema);
