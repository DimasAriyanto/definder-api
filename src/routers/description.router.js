const express = require('express');
const {
  getAll,
  create,
  getOne,
  update,
  remove,
  getByPlaceId,
} = require('../controllers/descriptions.controller');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/description', getAll);
// router.get('/description/:id', getOne);
router.get('/description/:place_id', getByPlaceId);
router.post('/description/:place_id', create);
router.put('/description/:id', update);
router.delete('/description/:id', remove);

module.exports = router;
