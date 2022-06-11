const mongoose = require("mongoose");
const validator = require("validator");

let schema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [validator.isEmail, "wrong data in the email field"],
  },
  password: {
    type: String,
    min: 8,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    validate: [validator.isMobilePhone, "Please input a valid phone Number"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("user", schema);
