const express = require('express');
const router = express();
const { register, activate, activateSuccess, login, logout } = require('../controllers/auth.controller');
const { authenticateUser } = require('../middlewares/auth');

router.post('/register', register);
router.get('/email-activation', (req, res) => {
  let { token } = req.query;
  res.render('email-activation', { token });
});
router.post('/email-activation', activate);
router.get('/activate-success', activateSuccess);
router.post('/login', login);
router.post('/logout', authenticateUser, logout);

module.exports = router;
