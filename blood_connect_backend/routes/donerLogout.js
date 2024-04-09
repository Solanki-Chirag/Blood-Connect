const express = require('express');
const router = express.Router();
const donerLogoutController = require('../controllers/donerLogoutController');

router.get('/', donerLogoutController.handleLogout);

module.exports = router;