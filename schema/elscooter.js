const mongoose = require("mongoose");

// This schema contains data from the previous hour e.g. between 08:00-09:00

const scooterSchema = new mongoose.Schema(
  {
    sensorID: { type: Number, required: true },
    // isCharging: { type: Boolean, required: true },
    // lastUsed: { type: Date, required: true },
    // powered: { type: Boolean, required: true },
    // inUse: { type: Boolean, required: true },
    // battery: { type: Number, required: true, min: 0, max: 100 },
    // lifetimeDistance: { type: Number, required: true, min: 0 },
    // distanceSinceLastUse: { type: Number, required: true, min: 0 },

    useTime: { type: Number, required: true, max: 18000, min: 0 }, // Seconds max 3600s (60 min * 5)
    distance: { type: Number, required: true, min: 0, max: 100000 }, // Meters max 100 000m (20 km * 5)
    batteryEnd: { type: Number, required: true }, // % at 09:00
    dateRegistered: { type: Date, required: true },
    averageSpeed: { type: Number, required: true },
    // batteryStart: { type: Number, required: true }, // % at 08:00
    // startDate: { type: Date, required: true }, // Start date and time e.g. 22/05/2022 08:00
    // endDate: { type: Date, required: true }, // End date and time e.g. 22/05/2022 09:00
  },
  { collection: "scooters" }
);

module.exports = mongoose.model("Scooter", scooterSchema);
