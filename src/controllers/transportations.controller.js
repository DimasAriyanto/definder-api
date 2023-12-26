const { StatusCodes } = require('http-status-codes');
const transportationService = require('../services/transportations.service');

const getAll = async (req, res, next) => {
  try {
    const result = await transportationService.getAll();
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
    const result = await transportationService.getById({ id });
    res.status(StatusCodes.OK).json({
      status: 'Success',
      message: 'Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getTypeByPlaceId = async (req, res, next) => {
  try {
    const { place_id: id } = req.params;
    const result = await transportationService.getTypeByPlaceId({ id });
    res.status(StatusCodes.OK).json({
      status: 'Success',
      message: 'Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getByPlaceIdAndType = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { place_id: placeId } = req.params;
    const { type } = req.query;
    const result = await transportationService.getByPlaceIdAndType({ userId, placeId, type });
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
      userId: req.user.id,
      placeId: req.params.place_id,
      ...req.body,
    };
    const result = await transportationService.create(payload);
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
    const { id } = req.params;
    const payload = {
      ...req.body,
    };
    await transportationService.update(id, payload);
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
    await transportationService.remove({ id });
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
  getTypeByPlaceId,
  getByPlaceIdAndType,
  create,
  update,
  remove,
};
