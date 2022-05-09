const aedes = require("aedes")();
const httpServer = require("http").createServer();
const ws = require("websocket-stream");
const scooter = require("./schema/elscooter");
const { default: mongoose } = require("mongoose");

// Establishing connection to MongoDB
mongoose
  .connect(
    "mongodb+srv://cloudtech2:cloudtech22@idg2001cloudtech2.zeihw.mongodb.net/idg2001cloudtech2?retryWrites=true&w=majority"
  )
  .catch((error) => handleError(error));

// Creating HTTP server
ws.createServer({ server: httpServer }, aedes.handle);
const port = process.env.PORT || 80;

httpServer.listen(port, function () {
  console.log('Aedes listening on port:', port)
});

// Authentication-source: https://shrey-misra.medium.com/customizing-your-own-mqtt-broker-with-node-js-4bc8212a1739
// Authenticate the connecting client
aedes.authenticate = (client, username, password, callback) => {
  password = Buffer.from(password, "base64").toString();

  // Checking if the client uses the correct username and password
  if (username === "cubchuckle" && password === "S4HRZMJFbygQhHvH") {
    return callback(null, true);
  }

  const error = new Error("Authentication Failed!! Invalid user credentials.");
  console.log("Error ! Authentication failed.");
  return callback(error, false);
};

// Authorizing client to publish on a message topic
aedes.authorizePublish = (client, packet, callback) => {
  if (packet.topic === "scooterData") {
    return callback(null);
  }

  console.log("Error ! Unauthorized publish to a topic.");
  return callback(
    new Error("You are not authorized to publish on this message topic.")
  );
};

// When client connects
aedes.on("client", function (client) {
  console.log(
    "Client Connected: \x1b[34m" + (client ? client.id : client) + "\x1b[0m"
  );
});

// When client disconnects
aedes.on("clientDisconnect", function (client) {
  console.log(
    "Client Disconnected: \x1b[34m" + (client ? client.id : client) + "\x1b[0m"
  );
});

// When client subscribes
aedes.on("subscribe", function (subscriptions, client) {
  console.log(
    "Client: \x1b[34m" +
      (client ? client.id : client) +
      "\x1b[32m subscribed to topics: \x1b[33m" +
      subscriptions.map((s) => s.topic).join("\n"),
    "\x1b[0m"
  );
});

// When client unsubscribes
aedes.on("unsubscribe", function (subscriptions, client) {
  console.log(
    "Client: \x1b[34m " +
      (client ? client.id : client) +
      "\x1b[32m unsubscribed to topics: \x1b[37m" +
      subscriptions.join("\n"),
    "\x1b[0m"
  );
});

// Fires when a message is published
aedes.on("publish", async function (packet, client) {
  if (client) {
    console.log(
      "Client: \x1b[34m",
      client.id,
      "\x1b[37m has published\x1b[31m",
      packet.payload.toString(),
      "\x1b[37mto topic:\x1b[33m",
      packet.topic,
      "\x1b[0m"
    );
    let jsonData = JSON.parse(packet.payload.toString());

    // Uploading the data received from client to MongoDB
    await scooter.create(jsonData, function (error, result) {
      if (error != null) {
        console.log("ERROR: " + error);
      }
    });
  }
});
