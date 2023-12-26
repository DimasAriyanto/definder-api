const { StatusCodes } = require('http-status-codes');
const userFavoriteTourGuideService = require('./../services/userFavoriteTourGuides.service');

const getAll = async (req, res, next) => {
  try {
    const { id } = req.user;
    const result = await userFavoriteTourGuideService.getAll(id);
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
    const result = await userFavoriteTourGuideService.getById({ id });
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
      TourGuideId: req.params.tour_guide_id,
    };
    const result = await userFavoriteTourGuideService.create(payload);
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
    await userFavoriteTourGuideService.update(payload);
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
      tourGuideId: req.params.tour_guide_id,
      userId: req.user.id
    }
    await userFavoriteTourGuideService.remove(payload);
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
