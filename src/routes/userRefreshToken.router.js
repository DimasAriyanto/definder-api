const express = require('express');
const router = express();
const { index } = require('../controllers/userRefreshToken.controllers');
const { authenticateUser, authorizeRoles } = require('../middlewares/auth');

router.get('/', index);

module.exports = router;
