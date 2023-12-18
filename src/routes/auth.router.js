const express = require('express');
const router = express();
const { register, login } = require('./../controllers/auth.controllers');

router.post('/register', register);
router.post('/login', login);
// router.get('/whoami', restrict, whoami);

module.exports = router;