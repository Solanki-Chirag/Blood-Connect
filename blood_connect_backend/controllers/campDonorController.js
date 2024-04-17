const campDonor = require("../model/campDonor");

require('dotenv').config();



const registerDonor = async (req, res) => {
    const { CampId, Email,Liters } = req.body;
    console.log(req.body);
    
    try {
        
         await campDonor.create({
          CampId: CampId,
          Email:Email,
          Liters:Liters
        });
        
        res.status(201).json("donor camp registered..");
      
        // Patient data saved successfully
      } catch (err) {
        // Handle error
        console.log("error" +err)
      }
};





module.exports = { registerDonor};
  