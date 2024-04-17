const express = require("express");
const router = express.Router();
const registerCampController = require("../controllers/registerCampController");

router.post("/", registerCampController.handleRequest);

module.exports = router;
