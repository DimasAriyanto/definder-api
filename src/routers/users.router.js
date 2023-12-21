const express = require('express');
const { getAll, create, getOne, update, remove } = require('../controllers/users.controller');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/user', authenticateUser, getAll);
router.post('/user', authenticateUser ,create);
router.get('/user/:id', authenticateUser, getOne);
router.put('/user/:id', authenticateUser, update);
router.delete('/user/:id', authenticateUser, remove);

module.exports = router;