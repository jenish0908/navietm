const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  mail: String,
  contact: Number,
  address: String,
  pincode: Number,
  password: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
