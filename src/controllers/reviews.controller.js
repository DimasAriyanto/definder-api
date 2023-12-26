const { StatusCodes } = require('http-status-codes');
const reviewService = require('./../services/reviews.service');

const getAll = async (req, res, next) => {
  try {
    const result = await reviewService.getAll();
    res.status(StatusCodes.OK).json({
      status: 'Success',
      message: 'Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await reviewService.getById({ id });
    res.status(StatusCodes.OK).json({
      status: 'Success',
      message: 'Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getByPlaceId = async (req, res, next) => {
  try {
    const { place_id: id } = req.params;
    const result = await reviewService.getByPlaceId({ id });
    res.status(StatusCodes.OK).json({
      status: 'Success',
      message: 'Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const payload = {
      placeId: req.params.place_id,
      userId: req.user.id,
      ...req.body,
    };
    const result = await reviewService.create(payload);
    res.status(StatusCodes.CREATED).json({
      status: 'Success',
      message: 'Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const payload = {
      userId: req.user.id,
      ...req.params,
      ...req.body,
    };
    await reviewService.update(payload);
    res.status(StatusCodes.OK).json({
      status: 'Success',
      message: 'Success',
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await reviewService.remove({ id });
    res.status(StatusCodes.OK).json({
      status: 'Success',
      message: 'Success',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getOne,
  getByPlaceId,
  create,
  update,
  remove,
};
