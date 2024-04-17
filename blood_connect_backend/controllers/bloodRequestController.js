const request = require("../model/request");
const hospital = require("../model/Hospital");
const response = require('../model/response');
const doner = require("../model/Doner");
require('dotenv').config();

const handleRequest = async (req, res) => {

    const cookies = req.cookies;
    if (!cookies?.jwt)  res.status(204).json("empty cookie"); // No Content
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

const loadRequest = async (req, res) => {
  const cookies = req.cookies;
    if (!cookies?.jwt)  res.status(204).json("empty cookie"); // No Content
    const refreshToken = cookies.jwt;
    try {
        const findDoner = await doner.findOne({ refreshToken: refreshToken });
    const requests = await request.find({ bloodType: findDoner.bloodGroup });
    return res.status(200).json(requests);
    }
    catch (err) {
      // Handle error
    }

  };

  const acceptRequest = async (req, res) => {
    const cookies = req.cookies;
      if (!cookies?.jwt)  res.status(204).json("empty cookie"); // No Content
      const refreshToken = cookies.jwt;
      const { patientId, patientName, hospitalId, hospitalName, lastDate } = req.body;
      try {
          const findDoner = await doner.findOne({ refreshToken: refreshToken });
          const result = await response.create({
            patientId:patientId,
      patientName:patientName,
      hospitalId:hospitalId,
      hospitalName:hospitalName,
      donorId:findDoner._id,
      donorName:findDoner.firstName,
      lastDate:lastDate
          });
          console.log(result);
          res.status(201).json({ success: `response added` });
      }
      catch (err) {
        // Handle error
      }
  
    };
module.exports = { handleRequest,loadRequest ,acceptRequest};
  