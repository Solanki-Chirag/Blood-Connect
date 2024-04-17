const express = require("express");
const router = express.Router();
const bloodRequestController = require("../controllers/bloodRequestController");

router.get("/", bloodRequestController.loadRequest);

module.exports = router;
