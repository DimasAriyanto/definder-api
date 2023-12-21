const { sequelize, Category } = require('../models');

const getAll = async () => {
  return Category.findAll();
};

const getById = async (id) => {
  return Category.findByPk(id);
};

const create = async (payload) => {
  return sequelize.transaction(async (transaction) => {
    const result = await Category.create(payload, { transaction });
    return result;
  });
};

const update = async ({ id, name }) => {
  return sequelize.transaction(async (transaction) => {
    await Category.update(
      { name: name },
      {
        where: { id: id },
      },
      { transaction }
    );
  });
};

const remove = async (id) => {
  return await Category.destroy({
    where: { id: id },
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
