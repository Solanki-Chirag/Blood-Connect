const hospital = require("../model/Hospital");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const handleHospitalLogin = async (req, res) => {
  const { Hospital_id, password } = req.body;
  console.log("back",req.body);
  if (!Hospital_id || !password)
    return res.status(400).json("Hospital id and password required!!");

  const findHospital = await hospital.findOne({ Hospital_id: Hospital_id });
  if (!findHospital) return res.status(401).json("Hospital not found!!");

  const match = await bcrypt.compare(password, findHospital.password);

  if (match) {
    const hospital_name = findHospital.Hospital_name;

    const accessToken = jwt.sign(
      {
        Hospital_name: hospital_name,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "50m" }
    );

    const refreshToken = jwt.sign(
      {
        Hospital_name: hospital_name,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    findHospital.refreshToken = refreshToken;
    const result = await findHospital.save();
    console.log(result);

    res.cookie("jwt", refreshToken, {
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } else {
    return res.status(401).json("Incorrect password !!");;
  }
};

module.exports = { handleHospitalLogin };
