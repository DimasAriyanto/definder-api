const express = require('express');
const { getAll, create } = require('../controllers/mbti.controller');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/mbti', authenticateUser, getAll);
// router.get('/mbti/:id', authenticateUser, getOne);
// router.get('/mbti/:place_id', authenticateUser, getByPlaceId);
router.post('/mbti/', authenticateUser ,create);
// router.put('/mbti/:id/place/:place_id', authenticateUser, update);
// router.delete('/mbti/:id', authenticateUser, remove);

module.exports = router;