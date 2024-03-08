const hospital = require("../model/Hospital");
const bcrypt = require("bcryptjs");

const handleNewHospital = async (req, res) => {
  const { Hospital_name, Hospital_id, email, contact, password } = req.body;
  if (!Hospital_name || !Hospital_id || !email || !contact || !password)
    return res.status(400).json({ message: "All fields are required" });

  // check for duplicate usernames in the db
  const duplicate = await hospital.findOne({ Hospital_id: Hospital_id }).exec();
  if (duplicate) return res.sendStatus(409); //Conflict

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);

    //create and store the new user
    const result = await hospital.create({
      Hospital_name: Hospital_name,
      Hospital_id: Hospital_id,
      email: email,
      contact: contact,
      password: hashedPwd,
    });

    console.log(result);

    res.status(201).json({ success: `New hospital ${Hospital_name} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewHospital };
