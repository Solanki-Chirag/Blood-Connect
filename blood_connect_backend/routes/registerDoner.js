const express = require("express");
const router = express.Router();
const donerRegisterController = require("../controllers/donerRegisterController");

router.post("/", donerRegisterController.handleNewDoner);

module.exports = router;
