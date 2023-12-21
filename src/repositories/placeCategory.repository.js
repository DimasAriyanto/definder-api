const { sequelize, PlaceCategory } = require('../models');

const create = async (payload) => {
  console.log(payload);
  return sequelize.transaction(async (transaction) => {
    const result = await PlaceCategory.create(payload, { transaction });
    return result;
  });
};

module.exports = { create };
