const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  mobilenum: {
    type: String,
  },
  experience: {
    type: Number,
  },
  specialization: {
    type: String,
  },
  role: {
    type: String,
    default: "user",
  },
  goal: {
    type: String,
    default: "",
  },
  subgoal: {
    type: String,
    default: "",
  },
  age: {
    type: Number,
  },
  experience: {
    type: Number,
  },
  specialization: {
    type: String,
  },
  clients: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("User", userSchema);
