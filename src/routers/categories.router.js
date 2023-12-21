const express = require('express');
const { getAll, create, getOne, update, remove } = require('../controllers/categories.controller');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/category', getAll);
router.get('/category/:id', getOne);
router.post('/category' ,create);
router.put('/category/:id', update);
router.delete('/category/:id', remove);

module.exports = router;