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
const { EventEmitter } = require('events');
PORT = 3500;

connectDB();
EventEmitter.defaultMaxListeners = 15;
app.set("view engine", "ejs");
// // custom middleware logger
// app.use(logger);

// // Handle options credentials check - before CORS!
// // and fetch cookies credentials requirement
 app.use(credentials);

 app.use(cookieParser());

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get("/", (req, res) => {
 // res.send("hello world");
});
app.use("/registerHospital",  require("./routes/registerHospital"));
app.use("/Hospital_SignIn", require("./routes/authHospital"));
app.use("/Doner_SignIn", require("./routes/authDoner"));

app.use("/registerDoner", require("./routes/registerDoner"));

app.use("/forgot-password", require("./routes/Donorforgotpassword"));

app.use("/reset-password", require("./routes/DonorResetPassword"));

app.use("/sendRequest", require("./routes/sendRequest"));
app.use("/registerCamp", require("./routes/registerCamp"));
app.use("/loadRequest", require("./routes/loadRequest"));



app.use(verifyJWT);
app.use(donerVerifyJWT);

mongoose.connection.once("open", () => {
  console.log("connected to mongodb");
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT} `);
  });
});
