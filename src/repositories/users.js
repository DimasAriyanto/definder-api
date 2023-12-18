const { Transaction } = require('sequelize');
const { sequelize, User } = require('../models');
const { BadRequestError, UnauthorizedError } = require('./../errors');

const create = async (payload) => {
  console.log(payload);
  const result = await sequelize.transaction(
    { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
    async (transaction) => {
      const user = await User.create(payload, { transaction });
console.log(user);
      return user;
    }
  );

  return result;
};

const findByEmail = async (email) => {
  const result = await sequelize.transaction(
    { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
    async (transaction) => {
      const user = await User.findOne({ where: { email } }, { transaction });

      return user;
    }
  );
  return result;
};

const checkAvailableUserWithEmail = async (email) => {
  return await User.findOne({ where: { email: email } });
};

module.exports = { create, findByEmail, checkAvailableUserWithEmail };
