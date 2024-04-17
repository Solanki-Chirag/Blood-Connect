const mongoose = require("mongoose");

const campSchema = new mongoose.Schema({
  CampId: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Liters: {
    type: String,
    required: true,
  },
});

const request = mongoose.model("campdonor", campSchema);

module.exports = request;
