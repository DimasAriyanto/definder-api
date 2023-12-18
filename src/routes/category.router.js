const express = require('express');
const { getAll, create, getOne, update, remove } = require('../controllers/category.controllers');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/category', getAll);
router.post('/category', authenticateUser ,create);
router.get('/:id', getOne);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;