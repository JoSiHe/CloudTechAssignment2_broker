const express = require("express");
const router = express.Router();
const scooterSchema = require("../schema/elscooter");

// get Data from mongoDB
function getData(name) {
  var query = scooterSchema.find({});
  return query;
}

router.get("/", (req, res) => {
  var query = getData();
  var data;

  query.exec(function (err, _data) {
    if (err) return console.log(err);
    // console.log("User requested data");
    // console.log(_data);
    data = _data;
    res.json(data);
  });
});

module.exports = router;
