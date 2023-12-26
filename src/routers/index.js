const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const v1 = '/api/v1';

const Auth = require('./auth.router');
const User = require('./users.router');
const Place = require('./places.router');
const Image = require('./images.router');
const Description = require('./description.router');
const Transportation = require('./transportations.router');
const Categories = require('./categories.router');
const Review = require('./reviews.router');
const TourGuide = require('./tourGuides.router');
const UserFavoritePlace = require('./userFavoritePlaces.router');
const UserFavoriteTourGuide = require('./userFavoriteTourGuides.router');
const Mbti = require('./mbti.router');

const notFoundMiddleware = require('../middlewares/not-found');
const handdleErrorMiddleware = require('../middlewares/handle-error');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to api definder',
  });
});

router.use(`${v1}/cms`, Auth);
router.use(`${v1}/cms`, User);
router.use(`${v1}/cms`, Place);
router.use(`${v1}/cms`, Image);
router.use(`${v1}/cms`, Description);
router.use(`${v1}/cms`, Transportation);
router.use(`${v1}/cms`, Categories);
router.use(`${v1}/cms`, Review);
router.use(`${v1}/cms`, TourGuide);
router.use(`${v1}/cms`, UserFavoritePlace);
router.use(`${v1}/cms`, UserFavoriteTourGuide);
router.use(`${v1}/cms`, Mbti);

router.use(notFoundMiddleware);
router.use(handdleErrorMiddleware);

module.exports = router;
