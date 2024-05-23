const express = require("express");
const router = express.Router();
const HospitalForgotPasswordController = require("../controllers/HospitalForgotPasswordController");

router.get("/:id/:token", HospitalForgotPasswordController.handleResetPassword);
router.post("/:id/:token", HospitalForgotPasswordController.updatePassword);

module.exports = router;
