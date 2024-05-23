const express = require("express");
const router = express.Router();
const HospitalForgotPasswordController = require("../controllers/HospitalForgotPasswordController");

router.get("/:id/:token", donorForgotPasswordController.handleResetPassword);
router.post("/:id/:token", donorForgotPasswordController.updatePassword);

module.exports = router;
