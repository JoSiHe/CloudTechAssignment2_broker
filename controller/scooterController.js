const Scooter = require("../schema/elscooter");

// Create scooter
const createScooter = async (req, res) => {
  try {
    const user = await Scooter.create(req.body);
    res.status(201).json(user);
    updateClients();
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

const updateClients = async () => {
  // get updated data from mongodb
  // send new data through mqtt to all subscribers
};

module.exports = {
  createScooter,
};
