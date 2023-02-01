const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Success! Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: " + error)
  }
}

module.exports = connectDB;