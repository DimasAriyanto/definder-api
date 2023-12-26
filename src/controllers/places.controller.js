const { StatusCodes } = require('http-status-codes');
const axios = require('axios');
const placeService = require('./../services/places.service');

const getAll = async (req, res, next) => {
  try {
    const payload = {
      daerah: req.query.daerah,
      object: req.query.object,
      mbti: req.query.mbti,
      user: req.user.id,
    };

    const result = await placeService.getByMbti(payload);

    res.json(result);
  } catch (error) {
    next(error);
  }
};


const getAboutById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await placeService.getAboutById({ id });
    res.status(StatusCodes.OK).json({
      status: 'Success',
      message: 'Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getTypeTransportById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await placeService.getTypeTransportById({ id });
    res.status(StatusCodes.OK).json({
      status: 'Success',
      message: 'Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getReviewById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await placeService.getReviewById({ id });
    res.status(StatusCodes.OK).json({
      status: 'Success',
      message: 'Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getTourGuideById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await placeService.getTourGuideById({ id });
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
    const result = await placeService.getOne(id);
    res.status(StatusCodes.OK).json({
      status: 'Success',
      message: 'Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const search = async (req, res, next) => {
  try {
    const { name } = req.query;
    const result = await placeService.search(name);
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
    const payload = { ...req.body };
    await placeService.create(payload);
    res.status(StatusCodes.CREATED).json({
      status: 'Success',
      message: 'Success',
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
    await placeService.update(id, payload);
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
    await placeService.remove({ id });
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
  search,
  getAboutById,
  getTypeTransportById,
  getReviewById,
  getTourGuideById,
  getOne,
  create,
  update,
  remove,
};
