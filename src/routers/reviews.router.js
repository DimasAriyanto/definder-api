const express = require('express');
const { getAll, create, getOne, update, remove } = require('../controllers/reviews.controller');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/review', authenticateUser, getAll);
router.post('/review/:place_id', authenticateUser ,create);
router.get('/review/:id', authenticateUser, getOne);
router.put('/review/:id/place/:place_id', authenticateUser, update);
router.delete('/review/:id', authenticateUser, remove);

module.exports = router;