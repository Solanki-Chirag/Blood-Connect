const donor = require("../model/Doner");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");

const handleForgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await donor.findOne({ email });
    if (!oldUser) {
      return res.status(401).json("donor not exists!!");
    }

    const secret = process.env.ACCESS_TOKEN_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `http://localhost:3500/reset-password/${oldUser._id}/${token}`;
    console.log(link);
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "patelanil07119@gmail.com",
        pass: "pldfelkndpevnzol",
      },
    });

    var mailOptions = {
      from: "patelanil07119@gmail.com",
      to: email,
      subject: "Password Reset",
      html:'<p> <a href= ' + link + ' > ' + link + ' </a> </p>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    
    return res.json("done");
  } catch (error) {}
};

const handleResetPassword = async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await donor.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = process.env.ACCESS_TOKEN_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email, status: "Not Verified" });
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
};

const updatePassword = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  const oldUser = await donor.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = process.env.ACCESS_TOKEN_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await donor.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );

    res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    console.log(error);
    res.json({ status: "Something Went Wrong" });
  }
};

module.exports = { handleForgotPassword, handleResetPassword, updatePassword };
