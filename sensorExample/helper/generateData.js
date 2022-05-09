// This file generates random data for a scooter.

class generateData {
  constructor(sensorID, date) {
    this.useTime = () => {
      return Math.floor(Math.random() * 18000 + 1);
    };

    this.distance = () => {
      return Math.floor(Math.random() * 100000 + 1);
    };

    this.batteryEnd = () => {
      return Math.floor(Math.random() * 100 + 1);
    };

    this.speed = () => {
      return Math.floor(Math.random() * 20 + 1);
    };

    // this.randomDate = () => {
    //   return [new Date(), new Date(new Date())];
    // };

    this.allData = {
      sensorID: sensorID,
      useTime: this.useTime(),
      distance: this.distance(),
      batteryEnd: this.batteryEnd(),
      averageSpeed: this.speed(),
      dateRegistered: date,
    };

    // this.loadData = () => {
    //   let mondayData = fs.readFileSync("../data/Monday/Monday_1.json");
    //   let tuesdayData = fs.readFileSync("../data/Tuesday/Tuesday_1.json");
    //   let wednesdayData = fs.readFileSync("../data/Wednesday/Wednesday_1.json");
    //   let thursdayData = fs.readFileSync("../data/Thursday/Thursday_1.json");
    //   let fridayData = fs.readFileSync("../data/Friday/Friday_1.json");

    //   let combinedData = Object.assign(
    //     JSON.parse(mondayData),
    //     JSON.parse(tuesdayData),
    //     JSON.parse(wednesdayData),
    //     JSON.parse(thursdayData),
    //     JSON.parse(fridayData)
    //   );

    // return combinedData;
    // };
  }
}

module.exports = generateData; // 👈 Export class
