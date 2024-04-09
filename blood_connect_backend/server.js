require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const mongoose = require("mongoose");

const connectDB = require("./config/dbConn");
PORT = 3500;

connectDB();

<<<<<<< HEAD
app.set("view engine", "ejs");
=======
>>>>>>> 5bef626a1b644845c5dc3bce3ba02e3cc5e6bfff

app.use(cors(corsOptions));



app.use(express.json());
//app.use(express.urlencoded({extended:false}));
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/registerHospital",  require("./routes/registerHospital"));
app.use("/authHospital", require("./routes/authHospital"));

<<<<<<< HEAD
app.use("/registerDoner", require("./routes/registerDoner"));

app.use("/forgot-password", require("./routes/Donorforgotpassword"));

app.use("/reset-password", require("./routes/DonorResetPassword"));
=======
app.use("/registerDoner",require("./routes/registerDoner"));  
>>>>>>> 5bef626a1b644845c5dc3bce3ba02e3cc5e6bfff

mongoose.connection.once("open", () => {
  console.log("connected to mongodb");
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT} `);
  });
});
