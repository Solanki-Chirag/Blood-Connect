const doner = require("../model/Doner");
const bcrypt = require("bcryptjs");


const handleNewDoner = async (req, res) => {

 
  const { firstName,lastName, email, contact,address,bloodGroup,file, password } = req.body;
  const bgfile=req.file.filename;
  console.log("filename",bgfile);
  if (!firstName || !lastName  || !email || !contact || !bloodGroup  || !password || !address)
    return res.status(400).json({ message: "All fields are required" });

  // check for duplicate usernames in the db
  const duplicate = await doner.findOne({ email: email }).exec();
  if (duplicate) return res.sendStatus(409); //Conflict

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);

    const url = `https://trueway-geocoding.p.rapidapi.com/Geocode?address=${address}&language=en`;
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
    const result1 = await doner.create({
      firstName:firstName,
      lastName:lastName,
      email: email,
      contact: contact,
      bloodGroup:bloodGroup,
      file:file,
      password: hashedPwd,
      file:bgfile,
      address:address,
      latitude:lat,
      longitude:lng
      
    });

    console.log(result1);

    res.status(201).json({ success: `New Doner ${firstName} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewDoner };
  