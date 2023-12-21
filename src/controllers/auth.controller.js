const { StatusCodes } = require('http-status-codes');
const authService = require('../services/auth.service');
const userService = require('../services/users.service');

const register = async (req, res, next) => {
  try {
    const payload = { ...req.body };
    const result = await userService.create(payload);
    res.status(StatusCodes.CREATED).json(result);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const payload = { ...req.body };
    const result = await authService.login(payload);
    res.status(StatusCodes.OK).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };
