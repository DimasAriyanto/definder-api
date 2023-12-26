const express = require('express');
const { getAll, create, getOne, getByPlaceId, update, remove } = require('../controllers/reviews.controller');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/review', authenticateUser, getAll);
// router.get('/review/:id', authenticateUser, getOne);
router.get('/review/:place_id', authenticateUser, getByPlaceId);
router.post('/review/:place_id', authenticateUser ,create);
router.put('/review/:id/place/:place_id', authenticateUser, update);
router.delete('/review/:id', authenticateUser, remove);

module.exports = router;