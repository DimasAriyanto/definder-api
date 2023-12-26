const express = require('express');
const { getAll, create, getOne, update, remove } = require('../controllers/userFavoritePlace.controller');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/user-favorite-place', authenticateUser, getAll);
router.post('/user-favorite-place/:place_id', authenticateUser ,create);
router.get('/user-favorite-place/:id', authenticateUser, getOne);
router.put('/user-favorite-place/:id', authenticateUser, update);
router.delete('/user-favorite-place/:place_id', authenticateUser, remove);

module.exports = router;