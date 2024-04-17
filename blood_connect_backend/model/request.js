const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true
  },
  patientId: {
    type: String,
    required: true
  },
  bloodType: {
    type: String,
    required: true
  },
  hospitalName: {
    type: String,
    required: true
  },
  hospitalId: {
    type: String,
    required: true
  },
  hospitalAddress: {
    type: String,
    required: true
  },
  lastDate:{
    type:Date
  }
});

const request = mongoose.model('request', requestSchema);

module.exports = request;
