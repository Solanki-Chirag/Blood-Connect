const camp = require("../model/camp");
const hospital = require("../model/Hospital");
require('dotenv').config();

let currentCampId = 1; // Initialize the currentCampId

const handleRequest = async (req, res) => {
    
    const cookies = req.cookies;
    if (!cookies?.jwt)  res.status(204).json("empty cookie"); // No Content
    const refreshToken = cookies.jwt;
    try {
        console.log(req.body);
        const highestCamp = await camp.findOne().sort({ CampId: -1 });
        let newCampId = 1; // Default to 1 if no camps exist yet
        if (highestCamp) {
          newCampId = parseInt(highestCamp.CampId) + 1;// Increment the highest campId by 1
        }
        const findHospital = await hospital.findOne({ refreshToken: refreshToken });
         await camp.create({
          CampId: newCampId,
          CampAddress: req.body.CampAddress,
          CampDays:req.body.CampDays,
          CampDate: req.body.CampDate,
          hospitalName: findHospital.Hospital_name,
          hospitalId:findHospital.Hospital_id,
          hospitalAddress: findHospital.Hospital_address,
         
        });
        campid=campid+1;
        res.status(201).json("camp registered..");
      
        // Patient data saved successfully
      } catch (err) {
        // Handle error
        console.log("error" +err)
      }
};

const loadCamps= async (req,res)=> {
  
  const cookies = req.cookies;
  if (!cookies?.jwt)  res.status(204).json("empty cookie"); // No Content
  const refreshToken = cookies.jwt;
  try {
    
      const findHospital = await hospital.findOne({ refreshToken: refreshToken });
  const requests = await camp.find({ hospitalId: findHospital.Hospital_id });
  console.log(requests);
  return res.status(200).json(requests);
  }
  catch (err) {
    // Handle error
    console.log("err"+err)
  }
};



module.exports = { handleRequest,loadCamps };
  