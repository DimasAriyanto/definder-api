const { StatusCodes } = require('http-status-codes');
const userFavoritePlaceService = require('./../services/userFavoritePlaces.service');

const getAll = async (req, res, next) => {
  try {
    const { id } = req.user;
    const result = await userFavoritePlaceService.getAll(id);
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
    const result = await userFavoritePlaceService.getById({ id });
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
    };
    const result = await userFavoritePlaceService.create(payload);
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
      id: req.params.id,
      ...req.body,
    };
    await userFavoritePlaceService.update(payload);
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
    const payload = {
      placeId: req.params.place_id,
      userId: req.user.id
    }
    await userFavoritePlaceService.remove(payload);
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
  create,
  update,
  remove,
};
