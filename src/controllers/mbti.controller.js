const { StatusCodes } = require('http-status-codes');
const mbtiService = require('./../services/mbti.service');

const getAll = async (req, res, next) => {
  try {
    const { id } = req.user;
    const result = await reviewService.getAll(id);
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
      parameters: req.params.mbti,
      userId: req.user.id,
    };
    const result = await mbtiService.create(payload);
    res.status(StatusCodes.CREATED).json({
      status: 'Success',
      message: 'Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  create,
};
