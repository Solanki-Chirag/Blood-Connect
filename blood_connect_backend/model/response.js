const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  patientId: {
    type: String,
    required: true
  },
  patientName: {
    type: String,
    required: true
  },
  hospitalId: {
    type: String,
    required: true
  },
  hospitalName: {
    type: String,
    required: true
  },
  donorId: {
    type: String,
    required: true
  },
  donorName: {
    type: String,
    required: true
  },
  lastDate: {
    type: Date,
    required: true
  }
});

const response = mongoose.model('response', responseSchema);

module.exports = response;
