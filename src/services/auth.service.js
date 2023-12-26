const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const util = require('util');
const jwtVerify = util.promisify(jwt.verify)
const dotenv = require('dotenv');
dotenv.config();
const userRepository = require('../repositories/users.repository');
const { BadRequestError, UnauthorizedError } = require('../errors');
const { createTokenUser } = require('../helpers/createTokenUser');
const { createJWT } = require('./jwt.service');
const nodemailerService = require('./nodemailer.service');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const checkAvailabilityUserWithEmail = async (id) => {
  const check = await userRepository.getByEmail(id);
  if (check) {
    throw new BadRequestError('User has already been used!');
  }
};

const register = async ({ name, email, password, password_confirmation }) => {
  if (password !== password_confirmation) {
    throw new BadRequestError('Please ensure that the password and password confirmation match!');
  }

  await checkAvailabilityUserWithEmail(email);

  const encryptedPassword = await bcrypt.hash(password, 10);

  const result = await userRepository.create({ name, email, password: encryptedPassword });

  let token = jwt.sign({ email: result.email }, JWT_SECRET_KEY);
  let url = `http://localhost:3030/api/v1/cms/email-activation?token=${token}`;

  const html = await nodemailerService.getHtml('activation-email.ejs', { name, url });
  nodemailerService.sendEmail(email, 'Email Activation', html);

  return result;
};

const activate = async (token) => {
  try {
    const decoded = await jwtVerify(token, JWT_SECRET_KEY);
    await userRepository.updateActivate(decoded.email);

    const successMessage = 'Your account has been successfully activated!';
    return `http://localhost:3030/api/v1/cms/activate-success?successMessage=${encodeURIComponent(successMessage)}`;
  } catch (err) {
    throw err;
  }
};


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

module.exports = { register, activate, login };
