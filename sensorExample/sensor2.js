const sensorId = 2;
const sendData = require("./helper/sendData");
const weekData = require("./helper/generateWeek");

new sendData(sensorId, new weekData(sensorId).week);
