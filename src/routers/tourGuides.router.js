const express = require('express');
const { getAll, create, getOne, getByPlaceId, update, remove } = require('../controllers/tourGuides.controller');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/tour-guide', authenticateUser, getAll);
router.post('/tour-guide/', authenticateUser ,create);
// router.get('/tour-guide/:id', authenticateUser, getOne);
router.get('/tour-guide/:place_id', authenticateUser, getByPlaceId);
router.put('/tour-guide/:id', authenticateUser, update);
router.delete('/tour-guide/:id', authenticateUser, remove);

module.exports = router;