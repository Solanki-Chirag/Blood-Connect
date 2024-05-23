const mongoose = require("mongoose");

const campSchema = new mongoose.Schema({
  CampId: {
    type: String,
    required: true,
  },
  CampDate: {
    type: String,
    required: true,
  },
  HospitalName: {
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
  certificate:{
    type:String,
  },
});

const request = mongoose.model("campdonor", campSchema);

module.exports = request;
