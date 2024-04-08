require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const mongoose = require("mongoose");

const connectDB = require("./config/dbConn");
PORT = 3500;

connectDB();


app.use(cors(corsOptions));



app.use(express.json());
//app.use(express.urlencoded({extended:false}));
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/registerHospital",  require("./routes/registerHospital"));
app.use("/authHospital", require("./routes/authHospital"));

app.use("/registerDoner",require("./routes/registerDoner"));  

mongoose.connection.once("open", () => {
  console.log("connected to mongodb");
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT} `);
  });
});
