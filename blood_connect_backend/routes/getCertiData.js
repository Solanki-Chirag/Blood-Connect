const express = require("express");
const router = express.Router();
const getCertiDataController = require("../controllers/getCertiDataController");

router.get("/", getCertiDataController.getCertiData);

module.exports = router;
