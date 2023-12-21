const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const v1 = '/api/v1';

const Auth = require('./auth.router');
const User = require('./users.router');
const Owner = require('./owners.router');
const Place = require('./places.router');
const Image = require('./images.router');
const Categories = require('./categories.router');
const Review = require('./reviews.router');

const notFoundMiddleware = require('../middlewares/not-found');
const handdleErrorMiddleware = require('../middlewares/handle-error');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to api definder',
  });
});

router.use(`${v1}/cms`, Auth);
router.use(`${v1}/cms`, User);
router.use(`${v1}/cms`, Owner);
router.use(`${v1}/cms`, Place);
router.use(`${v1}/cms`, Image);
router.use(`${v1}/cms`, Categories);
router.use(`${v1}/cms`, Review);

router.use(notFoundMiddleware);
router.use(handdleErrorMiddleware);

module.exports = router;
