const express = require("express");
const router = express.Router();
const HospitalForgotPasswordController = require("../controllers/HospitalForgotPasswordController");

router.post("/", HospitalForgotPasswordController.handleForgotPassword);

module.exports = router;
