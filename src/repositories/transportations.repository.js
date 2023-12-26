const { sequelize, Transportation } = require('../models');
const { Sequelize, DataTypes } = require('sequelize');
const { NotFoundError } = require('../errors');

const getAll = async () => {
  return Transportation.findAll();
};

const getAllTypeByPlaceId = async (id) => {
  return Transportation.findAll({
    attributes: [
      [Sequelize.fn('DISTINCT', Sequelize.col('type')), 'type']
    ],
    where: {
      placeId: id,
    },
  });
};

const getById = async (id) => {
  return Transportation.findByPk(id);
};

const getTypeByPlaceId = async (id) => {
  return Transportation.findAll({
    where: { placeId: id },
    attributes: ['type'],
  });
};

const getByPlaceIdAndType = async (placeId, type) => {
  return Transportation.findAll({
    where: {
      placeId: placeId,
      type: type,
    },
  });
};

const create = async (payload) => {
  return sequelize.transaction(async (transaction) => {
    const result = await Transportation.create(payload, { transaction });
    return result;
  });
};

const update = async (id, payload) => {
  return sequelize.transaction(async (transaction) => {
    await Transportation.update(
      payload,
      {
        where: { id: id },
      },
      { transaction }
    );
  });
};

const remove = async (id) => {
  return await Transportation.destroy({
    where: { id: id },
  });
};

const checkAvailability = async (id) => {
  const check = await Transportation.findByPk(id);

  if (!check) {
    throw new NotFoundError(`Transportation with ID ${id} Not Found`);
  }
};

module.exports = {
  getAll,
  getAllTypeByPlaceId,
  getById,
  getByPlaceIdAndType,
  create,
  update,
  remove,
  checkAvailability,
};
