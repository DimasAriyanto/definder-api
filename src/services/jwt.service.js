const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, JWT_SECRET_KEY);
  return token;
};

const isTokenValid = ({ token }) => jwt.verify(token, JWT_SECRET_KEY);

const removeJWT = ({payload}) => {
  
}

module.exports = {
  createJWT,
  isTokenValid,
};
