const express = require('express');
const router = express.Router();
const donerRefreshTokenController = require('../controllers/donerRefreshTokenController');

router.get('/', donerRefreshTokenController.handleRefreshToken);

module.exports = router;