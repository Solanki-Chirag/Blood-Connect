const express = require("express");
const router = express.Router();
const campDonorController = require("../controllers/campDonorController");

router.post("/", campDonorController.registerDonor);

module.exports = router;
