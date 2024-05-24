const express = require("express");
const router = express.Router();
const bloodResponseController = require("../controllers/bloodResponseController");

router.get("/", bloodResponseController.loadResponses);

module.exports = router;
