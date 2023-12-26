const express = require('express');
const { getAll, create, getOne, update, remove, whoAmI, updatePassword } = require('../controllers/users.controller');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/user', authenticateUser, getAll);
router.get('/user/whoAmI/', authenticateUser, whoAmI);
router.get('/user/detail/:id', authenticateUser, getOne);
router.post('/user', authenticateUser ,create);
router.put('/user/:id', authenticateUser, update);
router.put('/user/update-password/:id', authenticateUser, updatePassword);
router.delete('/user/:id', authenticateUser, remove);

module.exports = router;