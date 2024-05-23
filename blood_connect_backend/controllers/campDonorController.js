const campDonor = require("../model/campDonor");
const hospital = require("../model/Hospital");
const Donor = require ("../model/Doner");
const Camp=require ("../model/camp");
require('dotenv').config();

const registerDonor = async (req, res) => {
    const { CampId, Email, Liters } = req.body;
    console.log(req.body);
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.status(204).json("empty cookie"); // No Content
    const refreshToken = cookies.jwt;
    try {
        const findHospital = await hospital.findOne({ refreshToken: refreshToken });
        const findCamp=await Camp.findOne({CampId:CampId});
        const newDonor = await campDonor.create({
            CampId,
            CampDate:findCamp.CampDate,
            HospitalName: findHospital.Hospital_name,
            Email,
            Liters,
        });

        res.status(201).json(newDonor);
    } catch (err) {
        console.log("error" + err);
        res.status(500).json({ message: "Internal server error" });
    }

};


const getCerti=async(req,res)=>{
  const cookies = req.cookies;
  if (!cookies?.jwt)  res.status(204).json("empty cookie"); // No Content
  const refreshToken = cookies.jwt;
  try {
    
    const findDonor = await Donor.findOne({ refreshToken: refreshToken });
    if (!findDonor) return res.status(404).json("Donor not found");

    const requests = await campDonor.find({ Email: findDonor.email });
    console.log(requests);
    return res.status(200).json(requests);
  } catch (err) {
    console.log("error" + err);
    res.status(500).json({ message: "Internal server error" });
  }
};



module.exports = { registerDonor,getCerti };
