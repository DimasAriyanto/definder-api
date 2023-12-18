const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const v1 = '/api/v1';

const Auth = require('./auth.router');
const UserRefreshToken = require('./userRefreshToken.router');
const Category = require('./category.router');
const TempatWisata = require('./tempatWisata.router');

const notFoundMiddleware = require('../middlewares/not-found');
const handdleErrorMiddleware = require('../middlewares/handle-error');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to api definder',
  });
});

router.use(`${v1}/cms`, Auth);
router.use('/refresh-token/:refreshToken', UserRefreshToken);
router.use(`${v1}/cms`, Category);
router.use('/tempat-wisata', TempatWisata);

router.use(notFoundMiddleware);
router.use(handdleErrorMiddleware);

module.exports = router;
