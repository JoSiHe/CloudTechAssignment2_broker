const mqtt = require("mqtt");
const fs = require("fs");
const host = "cloud-tech-broker.herokuapp.com";
const topic = "scooterData";

class sendData {
  constructor(sensorId, dataToSend, stopOnSuccess = true) {
    this.connectUrl = `ws://${host}`;
    this.newDataToSend = dataToSend;
    this.newDataToSend.sensorID = sensorId;
    this.newDataToSend = JSON.stringify(this.newDataToSend);
    this.clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

    // Connect to server
    this.client = mqtt.connect(this.connectUrl, {
      clientId: this.clientId,
      clean: true,
      connectTimeout: 4000,
      username: "cubchuckle",
      password: "S4HRZMJFbygQhHvH",
      reconnectPeriod: 1000,
    });

    // Publish new data to server
    this.client.on("connect", () => {
      console.log("Connected.");
      this.client.publish(
        topic,
        this.newDataToSend,
        { qos: 0, retain: false },
        (error) => {
          if (error) {
            console.error(error);
          } else {
            console.log(
              "Publish success!",
              stopOnSuccess ? "Terminating connection in 2 seconds..." : ""
            );
            if (stopOnSuccess)
              setTimeout(() => {
                process.exit();
              }, 2000);
          }
        }
      );
    });
  }
}

module.exports = sendData; // 👈 Export class
