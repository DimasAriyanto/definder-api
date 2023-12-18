const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION;

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRATION,
  });
  return token;
};

const isTokenValid = ({ token }) => jwt.verify(token, JWT_SECRET_KEY);

module.exports = {
  createJWT,
  isTokenValid,
};
