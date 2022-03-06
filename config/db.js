const mongoose = require("mongoose");
const env = require("./envConfig");

const connect = async () => {
  try {
    await mongoose.connect(env.URL);
    console.log("Database Connect!");
  } catch (error) {
    console.log(error.message);
    process.exit;
  }
};

module.exports = connect;
