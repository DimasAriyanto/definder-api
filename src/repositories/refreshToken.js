const { isTokenValidRefreshToken, createJWT, createTokenUser } = require('./../utils');
const { NotFoundError } = require('./../errors');
const { Transaction } = require('sequelize');
const { sequelize, User, UserRefreshToken } = require('../models');

const createUserRefreshToken = async (payload) => {
  const result = await UserRefreshToken.create(payload);

  return result;
};

const getUserRefreshToken = async (req) => {
  const { refreshToken } = req.params;
  const result = await UserRefreshToken.findOne({
    refreshToken,
  });

  if (!result) throw new NotFoundError(`refreshToken tidak valid `);

  const payload = isTokenValidRefreshToken({ token: result.refreshToken });

  const userCheck = await User.findOne({ email: payload.email });

  const token = createJWT({ payload: createTokenUser(userCheck) });

  return token;
};

module.exports = { createUserRefreshToken, getUserRefreshToken };
