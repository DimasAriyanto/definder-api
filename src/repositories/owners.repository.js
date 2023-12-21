const { sequelize, Owner } = require('../models');
const { NotFoundError } = require('../errors');

const getAll = async () => {
  return Owner.findAll();
};

const getById = async (id) => {
  return Owner.findByPk(id);
};

const create = async (payload) => {
  return sequelize.transaction(async (transaction) => {
    const result = await Owner.create(payload, { transaction });
    return result;
  });
};

const update = async (id, payload) => {
  return sequelize.transaction(async (transaction) => {
    await Owner.update(
      payload,
      {
        where: { id: id },
      },
      { transaction }
    );
  });
};

const remove = async (id) => {
  return await Owner.destroy({
    where: { id: id },
  });
};

const checkAvailability = async (id) => {
  const check = await Owner.findByPk(id);

  if (!check) {
    throw new NotFoundError(`Owner with ID ${id} Not Found`);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  checkAvailability,
};
