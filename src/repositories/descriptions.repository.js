const { sequelize, Description } = require('../models');
const { NotFoundError } = require('../errors');

const getAll = async () => {
  return Description.findAll();
};

const getAllByPlaceId = async (id) => {
  return Description.findAll({
    attributes: ['content'], // Specify the columns you want to include
    where: {
      placeId: id,
    },
  });
};

const getById = async (id) => {
  return Description.findByPk(id);
};

const getByPlaceId = async (id) => {
  return Description.findAll({
    where: { placeId: id },
  });
};

const create = async (payload) => {
  return sequelize.transaction(async (transaction) => {
    const result = await Description.create(payload, { transaction });
    return result;
  });
};

const update = async (id, payload) => {
  return sequelize.transaction(async (transaction) => {
    await Description.update(
      payload,
      {
        where: { id: id },
      },
      { transaction }
    );
  });
};

const remove = async (id) => {
  return await Description.destroy({
    where: { id: id },
  });
};

const checkAvailability = async (id) => {
  const check = await Description.findByPk(id);

  if (!check) {
    throw new NotFoundError(`Description with ID ${id} Not Found`);
  }
};

module.exports = {
  getAll,
  getAllByPlaceId,
  getById,
  getByPlaceId,
  create,
  update,
  remove,
  checkAvailability,
};
