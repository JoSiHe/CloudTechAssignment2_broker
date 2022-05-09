const uri = process.env.MONGODB;
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://cloudtech:cloudtech@idg2001cloudtech2.zeihw.mongodb.net/idg2001cloudtech2?retryWrites=true&w=majority"
    );
    console.log("Connected to mongoDB");
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectDB;
