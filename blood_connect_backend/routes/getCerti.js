const express = require("express");
const router = express.Router();
const campDonorController = require("../controllers/campDonorController");

router.get("/", campDonorController.getCerti);

module.exports = router;
