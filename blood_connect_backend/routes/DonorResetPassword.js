const express = require("express");
const router = express.Router();
const donorForgotPasswordController = require("../controllers/donorForgotPasswordController");

router.get("/:id/:token", donorForgotPasswordController.handleResetPassword);
router.post("/:id/:token", donorForgotPasswordController.updatePassword);

module.exports = router;
