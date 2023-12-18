const bcrypt = require('bcrypt');
const userRepository = require('../repositories/users.repository');
const { BadRequestError, UnauthorizedError } = require('../errors');
const { createTokenUser } = require('../helpers/createTokenUser');
const { createJWT } = require('./jwt.service');

const register = async ({ name, email, password, password_confirmation }) => {
  if (password !== password_confirmation) {
    throw new BadRequestError('Please ensure that the password and password confirmation match!');
  }

  if (await userRepository.checkAvailableUserWithEmail(email)) {
    throw new BadRequestError('User has already been used!');
  }

  const encryptedPassword = await bcrypt.hash(password, 10);
  return await userRepository.create({ name, email, password: encryptedPassword });
};

const login = async ({ email, password }) => {
  if (!email || !password) {
    throw new BadRequestError('Please provide email and password');
  }

  const result = await userRepository.findByEmail(email);
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

module.exports = { register, login };
