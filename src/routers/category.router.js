const express = require('express');
const { getAll, create, getOne, update, remove } = require('../controllers/categories.controller');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/category', authenticateUser, getAll);
router.post('/category', authenticateUser ,create);
router.get('/category/:id', authenticateUser, getOne);
router.put('/category/:id', authenticateUser, update);
router.delete('/category/:id', authenticateUser, remove);

module.exports = router;