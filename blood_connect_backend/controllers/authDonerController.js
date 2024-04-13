const doner = require("../model/Doner");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const handleDonerLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log("back",req.body);
  if (!email || !password)
    return res.status(400).json("doner id and password required!!");

  const findDoner = await doner.findOne({ email: email });
  if (!findDoner) return res.status(401).json("Invalid email or password.");;

  const match = await bcrypt.compare(password, findDoner.password);

  if (match) {
    
    const Email = findDoner.email;

    const accessToken = jwt.sign(
      {
        email: Email,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60s" }
    );

    const refreshToken = jwt.sign(
      {
        email: Email,
      },  
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "10d" }
    );

    findDoner.refreshToken = refreshToken;
    const result = await findDoner.save();
    console.log(result);

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: 'None', 
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } else {
   return res.status(401).json("Invalid email or password.");
  }
};

module.exports = { handleDonerLogin };
