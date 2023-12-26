const express = require('express');
const { getAll, create, getOne, update, remove, getByPlaceId } = require('../controllers/images.controller');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/image', authenticateUser, getAll);
// router.get('/image/:id', authenticateUser, getOne);
router.get('/image/:place_id', authenticateUser, getByPlaceId);
router.post('/image', authenticateUser ,create);
router.put('/image/:id', authenticateUser, update);
router.delete('/image/:id', authenticateUser, remove);

module.exports = router;