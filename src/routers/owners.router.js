const express = require('express');
const { getAll, create, getOne, update, remove } = require('../controllers/owners.controller');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/owner', authenticateUser, getAll);
router.post('/owner', authenticateUser ,create);
router.get('/owner/:id', authenticateUser, getOne);
router.put('/owner/:id', authenticateUser, update);
router.delete('/owner/:id', authenticateUser, remove);

module.exports = router;