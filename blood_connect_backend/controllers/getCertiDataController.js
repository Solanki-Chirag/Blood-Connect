const campDonor = require("../model/campDonor");
const hospital = require("../model/Hospital");
const Donor = require ("../model/Doner");
const Camp=require ("../model/camp");
require('dotenv').config();

const getCertiData = async (req, res) => {
    console.log("getcerti...");
    const cookies = req.cookies;
    if (!cookies?.jwt)  res.status(204).json("empty cookie"); // No Content
    const refreshToken = cookies.jwt;
    try {
      
      const findDonor = await Donor.findOne({ refreshToken: refreshToken });
      if (!findDonor) return res.status(404).json("Donor not found");
  
      const requests = await campDonor.find({ Email: findDonor.email });
      const responseData = requests.map(request => ({
        ...request.toObject(),
        FirstName: findDonor.firstName,
        LastName: findDonor.lastName
      }));
      console.log(responseData);
      return res.status(200).json(responseData);
    } catch (err) {
      console.log("error" + err);
      res.status(500).json({ message: "Internal server error" });
    }

};





module.exports = { getCertiData };
