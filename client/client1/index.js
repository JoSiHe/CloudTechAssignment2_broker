const mqtt = require("mqtt");
const host = "cloud-tech-broker.herokuapp.com";
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

const connectUrl = `ws://${host}`;
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: "cubchuckle",
  password: "S4HRZMJFbygQhHvH",
  reconnectPeriod: 1000,
});

const topic = "scooterData";

// Connect to the server
client.on("connect", () => {
  console.log("Connected");
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`);
  });
});

// When we receive a message from the server
client.on("message", (topic, payload) => {
  console.log("Received Message:", topic, payload.toString());
});
