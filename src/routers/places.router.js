const express = require('express');
const { getAll, create, getOne, search, update, remove, getAboutById, getTypeTransportById, getReviewById, getTourGuideById } = require('../controllers/places.controller');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/place', authenticateUser, getAll);
router.get('/place/search', authenticateUser, search);
router.get('/place/about/:id', authenticateUser, getAboutById);
router.get('/place/transport/:id', authenticateUser, getTypeTransportById);
router.get('/place/review/:id', authenticateUser, getReviewById);
router.get('/place/tour-guide/:id', authenticateUser, getTourGuideById);
router.get('/place/detail/:id', authenticateUser, getOne);
router.post('/place', authenticateUser ,create);
router.put('/place/:id', authenticateUser, update);
router.delete('/place/:id', authenticateUser, remove);

module.exports = router;