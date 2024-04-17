const mongoose = require("mongoose");

const campSchema = new mongoose.Schema({
  CampId: {
    type: String,
    required: true,
  },
  CampAddress: {
    type: String,
    required: true,
  },
  CampDays: {
    type: String,
    required: true,
  },
  CampDate: {
    type: String,
    required: true,
  },
  hospitalName: {
    type: String,
    required: true,
  },
  hospitalId: {
    type: String,
    required: true,
  },
  hospitalAddress: {
    type: String,
    required: true,
  },
});

const request = mongoose.model("camp", campSchema);

module.exports = request;
