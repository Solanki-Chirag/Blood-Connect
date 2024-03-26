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
  password:{
    type:String,
    required:true
  },
  refreshToken: String,
});

module.exports=mongoose.model("doner",donerSchema); 