const camp = require("../model/camp");
const hospital = require("../model/Hospital");
require('dotenv').config();

const handleRequest = async (req, res) => {

    const cookies = req.cookies;
    if (!cookies?.jwt)  res.status(204).json("empty cookie"); // No Content
    const refreshToken = cookies.jwt;
    try {
        console.log(req.body);
        const findHospital = await hospital.findOne({ refreshToken: refreshToken });
         await camp.create({
          CampAddress: req.body.CampAddress,
          CampDays:req.body.CampDays,
          CampDate: req.body.CampDate,
          hospitalName: findHospital.Hospital_name,
          hospitalId:findHospital.Hospital_id,
          hospitalAddress: findHospital.Hospital_address,
         
        });

        res.status(201).json("camp registered..");
      
        // Patient data saved successfully
      } catch (err) {
        // Handle error
        console.log("error" +err)
      }
};

module.exports = { handleRequest };
  