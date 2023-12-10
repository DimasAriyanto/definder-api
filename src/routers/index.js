const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const Category = require('./category.router');

const notFoundMiddleware = require('./../middlewares/not-found');
const handdleErrorMiddleware = require('./../middlewares/handle-error');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to api definder',
  });
});

router.use('/category', Category);

router.use(notFoundMiddleware);
router.use(handdleErrorMiddleware);

module.exports = router;
