const doner = require("../model/Doner");
const bcrypt = require("bcryptjs");

const handleNewDoner = async (req, res) => {
  const { firstName,lastName, email, contact,bloodGroup, password } = req.body;
  if (!firstName || !lastName  || !email || !contact || !bloodGroup || !password)
    return res.status(400).json({ message: "All fields are required" });

  // check for duplicate usernames in the db
  const duplicate = await doner.findOne({ email: email }).exec();
  if (duplicate) return res.sendStatus(409); //Conflict

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);
    
    //create and store the new user
    const result = await doner.create({
      firstName:firstName,
      lastName:lastName,
      email: email,
      contact: contact,
      bloodGroup:bloodGroup,
      password: hashedPwd,
    });

    console.log(result);

    res.status(201).json({ success: `New Doner ${firstName} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewDoner };
  