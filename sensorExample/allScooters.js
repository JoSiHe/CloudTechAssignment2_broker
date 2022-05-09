const scooterAmount = 10; // Replace with how many scooters you want to simulate
const sendData = require("./helper/sendData");
const weekData = require("./helper/generateWeek");

for (let i = 1; i <= scooterAmount; i++) {
  new sendData(i, new weekData(i).week);
}
