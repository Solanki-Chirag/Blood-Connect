const hospital = require("../model/Hospital");
const bcrypt = require("bcryptjs");

const handleNewHospital = async (req, res) => {
  const { Hospital_name, Hospital_id, email,Hospital_address, contact, password } = req.body;
  if (!Hospital_name || !Hospital_id || !email || !contact || !password)
    return res.status(400).json({ message: "All fields are required" });

  // check for duplicate usernames in the db
  const duplicate = await hospital.findOne({ Hospital_id: Hospital_id }).exec();
  if (duplicate) return res.status(409); //Conflict

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);

    const url = `https://trueway-geocoding.p.rapidapi.com/Geocode?address=${Hospital_address}&language=en`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ea2fdf51a9msh07a632cb92ed185p16fcdejsn540dd31b9f3d',
		'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
	}
};


	const response = await fetch(url, options);
	const result = await response.json();
	const location = result.results[0].location;
  console.log(location);
      const lat = location.lat;
      const lng = location.lng;


    //create and store the new user
    const result1 = await hospital.create({
      Hospital_name: Hospital_name,
      Hospital_id: Hospital_id,
      Hospital_address:Hospital_address,
      email: email,
      contact: contact,
      password: hashedPwd,
      latitude: lat,
      longitude: lng
    });

    console.log(result1);

    res.status(201).json({ success: `New hospital ${Hospital_name} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewHospital };
