const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  bloodGroup:{
    type:String,
    required:true
  },
  file:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  address:{
    type:String
  },
  latitude: {
    type: Number, 

  },
  longitude: {
    type: Number,

  },
  refreshToken: String,
});

module.exports = mongoose.model("doner", donerSchema);
