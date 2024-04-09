const express = require("express");
const router = express.Router();
const authDonerController = require("../controllers/authDonerController");

router.post("/",authDonerController.handleDonerLogin);

module.exports = router;
