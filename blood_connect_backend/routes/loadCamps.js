const express = require("express");
const router = express.Router();
const registerCampController = require("../controllers/registerCampController");

router.get("/", registerCampController.loadCamps);

module.exports = router;
