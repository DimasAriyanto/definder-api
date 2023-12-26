const express = require('express');
const {
  getAll,
  create,
  getOne,
  update,
  remove,
  getTypeByPlaceId,
  getByPlaceIdAndType,
} = require('../controllers/transportations.controller');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/transportation', authenticateUser, getAll);
// router.get('/transportation/:id', authenticateUser, getOne);
router.get('/transportation/:place_id', authenticateUser, getTypeByPlaceId);
router.get('/transportation/:place_id/type', authenticateUser, getByPlaceIdAndType);
router.post('/transportation/:place_id', authenticateUser, create);
router.put('/transportation/:id', authenticateUser, update);
router.delete('/transportation/:id', authenticateUser, remove);

module.exports = router;
