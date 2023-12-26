const { StatusCodes } = require('http-status-codes');
const authService = require('../services/auth.service');

const register = async (req, res, next) => {
  try {
    const payload = { ...req.body };
    const result = await authService.register(payload);
    res.status(StatusCodes.CREATED).json(result);
  } catch (err) {
    next(err);
  }
};

const activate = async (req, res) => {
  const { token } = req.query;

  const redirectUrl = await authService.activate(token);
  res.redirect(redirectUrl);
};

const activateSuccess = (req, res) => {
  const { successMessage } = req.query;
  res.render('activate-success.ejs', { successMessage });
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

const logout = (req, res, next) => {
  const token = req.headers['authorization'];

  res.json({ message: 'Logout successful' });
};

module.exports = { register, activate, activateSuccess, login, logout };
