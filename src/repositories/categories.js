const { Transaction } = require('sequelize');
const { sequelize, Category } = require('../models');
const { NotFoundError } = require('../errors');

const getCategoryAll = async () => {
  const result = await Category.findAll();

  return result;
};

const getCategoryById = async (req) => {
  const { id } = req.params;
  const result = await Category.findByPk(id);

  return result;
};

const createCategory = async (req) => {
  const { nama } = req.body;

  const result = await sequelize.transaction(
    { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
    async (transaction) => {
      const newCategory = await Category.create(
        {
          nama: nama,
        },
        { transaction }
      );
      return newCategory;
    }
  );

  return result;
};

const deleteCategory = async (id) => {
  const result = await sequelize.transaction(
    { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
    async (transaction) => {
      await Category.destroy({
        where: {
          id: id,
        },
        transaction,
      });

      return {};
    }
  );

  return result;
};

const updateCategory = async (req) => {
  const { id } = req.params;
  const { nama } = req.body;
  const result = await sequelize.transaction(
    { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
    async (transaction) => {
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
    }
  );

  return result;
};

const checkAvailableCategory = async (id) => {
  const result = await Category.findByPk(id);

  if (!result) throw new NotFoundError(`Category with ID ${id} Not Found`);
};

module.exports = {
  getCategoryAll,
  getCategoryById,
  createCategory,
  deleteCategory,
  updateCategory,
  checkAvailableCategory,
};
