const { StatusCodes } = require('http-status-codes');
const descriptionService = require('./../services/descriptions.service');

const getAll = async (req, res, next) => {
  try {
    const result = await descriptionService.getAll();
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
    const result = await descriptionService.getById({ id });
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
    const result = await descriptionService.getByPlaceId({ id });
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
      ...req.body,
    };
    const result = await descriptionService.create(payload);
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
    await descriptionService.update(id, payload);
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
    await descriptionService.remove({ id });
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
