const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Student's name is required"],
  },
  email: {
    type: String,
    required: [true, "Student's Email is required"],
    unique: true,
    lowercase: true,
  },
  contact: {
    type: Number,
    required: [true, "Student's contact number is required"],
  },
  address: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
