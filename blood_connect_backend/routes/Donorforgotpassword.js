const express = require("express");
const router = express.Router();
const donorForgotPasswordController = require("../controllers/donorForgotPasswordController");

router.post("/", donorForgotPasswordController.handleForgotPassword);

module.exports = router;
