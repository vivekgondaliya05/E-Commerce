const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGODB_URI;

const ConnectDb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("database connection is successful");
  } catch (error) {
    console.log("database connction is failed", error);
  }
};
  
module.exports = ConnectDb;