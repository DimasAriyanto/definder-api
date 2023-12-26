const express = require('express');
const { getAll, create, getOne, update, remove } = require('../controllers/userFavoriteTourGuide.controller');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/user-favorite-tour-guide', authenticateUser, getAll);
router.post('/user-favorite-tour-guide/:tour_guide_id', authenticateUser ,create);
router.get('/user-favorite-tour-guide/:id', authenticateUser, getOne);
router.put('/user-favorite-tour-guide/:id', authenticateUser, update);
router.delete('/user-favorite-tour-guide/:id', authenticateUser, remove);

module.exports = router;