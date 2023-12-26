const { sequelize, Mbti } = require('../models');

const getAll = async (userId) => {
  return Mbti.findAll({
    where: {
      userId,
    },
  });
};

const create = async (payload) => {
  return sequelize.transaction(async (transaction) => {
    const result = await Mbti.create(payload, { transaction });
    return result;
  });
};

module.exports = { getAll, create };
