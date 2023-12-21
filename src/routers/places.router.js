const express = require('express');
const { getAll, create, getOne, search, update, remove, getByNameAndProvinci } = require('../controllers/places.controller');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/place', getAll);
router.get('/place/detail/:id', authenticateUser, getOne);
router.get('/place/search', authenticateUser, search);
router.get('/place/location', authenticateUser, getByNameAndProvinci);
router.post('/place' ,create);
router.put('/place/:id', authenticateUser, update);
router.delete('/place/:id', authenticateUser, remove);

module.exports = router;