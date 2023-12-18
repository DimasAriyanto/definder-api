const { sequelize, User } = require('../models');

const create = async (payload) => {
  return sequelize.transaction(async (transaction) => {
    const result = await User.create(payload, { transaction });
    return result;
  });
};

const findByEmail = async (email) => {
  return sequelize.transaction(async (transaction) => {
    const result = await User.findOne({ where: { email } }, { transaction });
    return result;
  });
};

const checkAvailableUserWithEmail = async (email) => {
  return User.findOne({ where: { email } });
};

module.exports = { create, findByEmail, checkAvailableUserWithEmail };
