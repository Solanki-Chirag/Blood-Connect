require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const mongoose = require("mongoose");
const verifyJWT = require('./middleware/verifyJwt');
const donerVerifyJWT = require('./middleware/donerVerifyJwt');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const connectDB = require("./config/dbConn");
PORT = 3500;

connectDB();


app.use(cors(corsOptions));



app.use(express.json());
app.use(express.urlencoded({extended:false}));
//middleware for cookies
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/registerHospital",  require("./routes/registerHospital"));
app.use("/Hospital_SignIn", require("./routes/authHospital"));
app.use("/Doner_SignIn", require("./routes/authDoner"));

<<<<<<< HEAD
app.use("/registerDoner", require("./routes/registerDoner"));

app.use("/forgot-password", require("./routes/Donorforgotpassword"));

app.use("/reset-password", require("./routes/DonorResetPassword"));
=======
app.use("/registerDoner",require("./routes/registerDoner"));  

mongoose.connection.once("open", () => {
  console.log("connected to mongodb");
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT} `);
  });
});
