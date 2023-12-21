const express = require('express');
const { getAll, create, getOne, update, remove } = require('../controllers/images.controller');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/image', authenticateUser, getAll);
router.post('/image', authenticateUser ,create);
router.get('/image/:id', authenticateUser, getOne);
router.put('/image/:id', authenticateUser, update);
router.delete('/image/:id', authenticateUser, remove);

module.exports = router;