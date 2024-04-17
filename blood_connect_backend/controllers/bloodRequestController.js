const request = require("../model/request");
const hospital = require("../model/Hospital");
require('dotenv').config();

const handleRequest = async (req, res) => {

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No Content
    const refreshToken = cookies.jwt;

    try {

        const findHospital = await hospital.findOne({ refreshToken: refreshToken });

         await request.create({
          patientName: req.body.patientName,
          patientId:req.body.patientId,
          bloodType: req.body.bloodType,
          hospitalName: findHospital.Hospital_name,
          hospitalId:findHospital.Hospital_id,
          hospitalAddress: findHospital.Hospital_address,
          lastDate:req.body.lastDate
        });

        res.status(201).json("request sent...");
      
        // Patient data saved successfully
      } catch (err) {
        // Handle error
      }
};

module.exports = { handleRequest };
  