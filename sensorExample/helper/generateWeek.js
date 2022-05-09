const randomData = require("./generateData");

class generateWeek {
  constructor(sensorId) {
    this.mondayData = new randomData(
      sensorId,
      new Date("09 May 2022").toISOString()
    ).allData;

    this.tuesdayData = new randomData(
      sensorId,
      new Date("10 May 2022").toISOString()
    ).allData;

    this.wednesdayData = new randomData(
      sensorId,
      new Date("11 May 2022").toISOString()
    ).allData;

    this.thursdayData = new randomData(
      sensorId,
      new Date("12 May 2022").toISOString()
    ).allData;

    this.fridayData = new randomData(
      sensorId,
      new Date("13 May 2022").toISOString()
    ).allData;

    this.week = [
      this.mondayData,
      this.tuesdayData,
      this.wednesdayData,
      this.thursdayData,
      this.fridayData,
    ];
  }
}

module.exports = generateWeek; // 👈 Export class
