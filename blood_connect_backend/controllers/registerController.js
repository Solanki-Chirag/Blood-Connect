const hospital = require("../model/Hospital");
const bcrypt = require("bcryptjs");

const handleNewHospital = async (req, res) => {
  const { hospital_name, hospital_id, email, contact, password } = req.body;
  console.log(hospital_name);
  console.log(hospital_id);
  console.log(email);
  console.log(contact);
  console.log(password);
  if (!hospital_name || !hospital_id || !email || !contact || !password)
    return res.status(400).json({ message: "All fields are required" });

  // check for duplicate usernames in the db
  const duplicate = await hospital.findOne({ hospital_id: hospital_id }).exec();
  if (duplicate) return res.sendStatus(409); //Conflict

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);

    //create and store the new user
    const result = await hospital.create({
      hospital_name: hospital_name,
      hospital_id: hospital_id,
      email: email,
      contact: contact,
      password: hashedPwd,
    });

    console.log(result);

    res.status(201).json({ success: `New hospital ${hospital_name} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewHospital };
