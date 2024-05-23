const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
  Hospital_name: {
    type: String,
    required: true,
  },
  Hospital_id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Hospital_address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number, // Assuming latitude is a number
    required: true, // Or whichever validation you need
  },
  longitude: {
    type: Number, // Assuming longitude is a number
    required: true, // Or whichever validation you need
  },
  refreshToken: String,
});

module.exports = mongoose.model("hospital", hospitalSchema);
