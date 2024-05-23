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

    const filteredRequests = [];
    const donorLat = findDoner.latitude;
    const donorLon = findDoner.longitude;
      
    for (const req of requests) {
      const hospitalId = req.hospitalId;

      const findHospital = await hospital.findOne({ Hospital_id: hospitalId });

      const hospitalLat = findHospital.latitude;
      const hospitalLon = findHospital.longitude;


      const url = `https://geocodeapi.p.rapidapi.com/GetDistance?lat1=${donorLat}&lon1=${donorLon}&lat2=${hospitalLat}&lon2=${hospitalLon}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ea2fdf51a9msh07a632cb92ed185p16fcdejsn540dd31b9f3d',
          'X-RapidAPI-Host': 'geocodeapi.p.rapidapi.com'
        }
      };

      const response = await fetch(url, options);
      const result = await response.json();
      
      if (result.DistanceInKm <= 10) {
        filteredRequests.push(req);
      }
    }
    
    return res.status(200).json(filteredRequests);
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
  