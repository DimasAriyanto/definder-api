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

const update = async ({ id, nama }) => {
  return sequelize.transaction(async (transaction) => {
    await Category.update(
      { nama: nama },
      {
        where: { id: id },
        transaction,
      }
    );

    const updatedCategoryData = await Category.findByPk(id, {
      transaction,
    });

    return {
      id: updatedCategoryData.id,
      nama: updatedCategoryData.nama,
      createdAt: updatedCategoryData.createdAt,
      updatedAt: updatedCategoryData.updatedAt,
    };
  });
};

const remove = async (id) => {
  return sequelize.transaction(async (transaction) => {
    await Category.destroy({
      where: {
        id: id,
      },
      transaction,
    });

    return {};
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
