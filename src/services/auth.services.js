const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('./../repositories/users');
const { BadRequestError, UnauthorizedError } = require('./../errors');
const { createTokenUser } = require('../helpers/createTokenUser');
const { createJWT } = require('./jwt.services');

const register = async (payload) => {
  const { name, email, password, password_confirmation } = payload;

  if (password != password_confirmation)
    throw new BadRequestError('Please ensure that the password and password confirmation match!');

  const check = await userRepository.checkAvailableUserWithEmail(email);
  if (check) throw new BadRequestError('User has already been used!');

  const encryptedPassword = await bcrypt.hash(password, 10);
  return await userRepository.create({ name, email, password: encryptedPassword });
};

const login = async (payload) => {
  if (!payload.email || !payload.password) {
    throw new BadRequestError('Please provide email and password');
  }

  const result = await userRepository.findByEmail(payload.email);
  if (!result) throw new UnauthorizedError('Invalid Credentials');
  
  const isPasswordCorrect = await bcrypt.compare(payload.password, result.password);
  if (!isPasswordCorrect) throw new UnauthorizedError('Invalid Credentials');

  const token = createJWT({ payload: createTokenUser(result) });

  return { result, token };
};

module.exports = { register, login };
