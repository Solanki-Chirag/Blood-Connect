const Hospital = require("../model/Hospital");
const Response = require('../model/response');
require('dotenv').config();

const loadResponses = async (req, res) => {
    
    const cookies = req.cookies;
  if (!cookies?.jwt) return res.status(204).json("empty cookie"); // No Content
  const refreshToken = cookies.jwt;

  try {
    // Find the hospital using the refresh token
    const hospital = await Hospital.findOne({ refreshToken: refreshToken });
    if (!hospital) return res.status(404).json("Hospital not found");

        
    // Fetch responses that match the hospital's ID and name
    const responses = await Response.find({
      hospitalId: hospital.Hospital_id,
      hospitalName: hospital.Hospital_name
    });



    return res.status(200).json(responses);
  } catch (err) {
    console.error('Error fetching responses:', err);
    res.status(500).json({ message: "An error occurred", error: err.message });
  }
  
};

module.exports = { loadResponses };