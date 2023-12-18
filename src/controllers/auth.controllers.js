// const { signin } = require('./../repositories/auth');

// const signinCms = async (req, res, next) => {
//   try {
//     const result = await signin(req);

//     res.status(StatusCodes.CREATED).json({
//       data: result,
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// module.exports = { signinCms };

const { StatusCodes } = require('http-status-codes');
const authService = require('./../services/auth.services');

const register = async (req, res, next) => {
  try {
    const payload = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      password_confirmation: req.body.password_confirmation,
    };
    const result = await authService.register(payload);
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const payload = {
      email: req.body.email,
      password: req.body.password,
    };
    const result = await authService.login(payload);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const whoami = (req, res, next) => {
  return res.status(200).json({
    status: true,
    message: 'OK',
    err: null,
    data: { user: req.user },
  });
};

module.exports = { register, login, whoami };
