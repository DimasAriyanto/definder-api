const bcrypt = require('bcrypt');
const userRepository = require('../repositories/users.repository');
const { BadRequestError, UnauthorizedError } = require('../errors');
const { createTokenUser } = require('../helpers/createTokenUser');
const { createJWT } = require('./jwt.service');

const login = async ({ email, password }) => {
  if (!email || !password) {
    throw new BadRequestError('Please provide email and password');
  }

  const result = await userRepository.getByEmail(email);
  if (!result) {
    throw new UnauthorizedError('Invalid Credentials');
  }

  const isPasswordCorrect = await bcrypt.compare(password, result.password);
  if (!isPasswordCorrect) {
    throw new UnauthorizedError('Invalid Credentials');
  }

  const token = createJWT({ payload: createTokenUser(result) });

  return { result, token };
};

module.exports = { login };
