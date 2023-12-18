const { Transaction } = require('sequelize');
const { sequelize, TempatWisata } = require('../models');
const { NotFoundError } = require('../errors');

const getTempatWisataAll = async () => {
  const result = await TempatWisata.findAll();

  return result;
};

const getTempatWisataById = async (req) => {
  const { id } = req.params;
  const result = await TempatWisata.findByPk(id);

  return result;
};

const createTempatWisata = async (req) => {
  const { category_id, nama, alamat, mapsUrl, deskriprsi } = req.body;

  const result = await sequelize.transaction(
    { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
    async (transaction) => {
      const newTempatWisata = await TempatWisata.create(
        {
          categoryId: category_id,
          nama: nama,
          alamat: alamat,
          mapsUrl: mapsUrl,
          deskriprsi: deskriprsi,
        },
        { transaction }
      );
      return newTempatWisata;
    }
  );

  return result;
};

const deleteTempatWisata = async (id) => {
  const result = await sequelize.transaction(
    { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
    async (transaction) => {
      await TempatWisata.destroy({
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

const updateTempatWisata = async (req) => {
  const { id } = req.params;
  const { nama } = req.body;
  const result = await sequelize.transaction(
    { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
    async (transaction) => {
      await TempatWisata.update(
        { nama: nama },
        {
          where: { id: id },
          transaction,
        }
      );

      const updatedTempatWisataData = await TempatWisata.findByPk(id, {
        transaction,
      });

      return {
        id: updatedTempatWisataData.id,
        nama: updatedTempatWisataData.nama,
        createdAt: updatedTempatWisataData.createdAt,
        updatedAt: updatedTempatWisataData.updatedAt,
      };
    }
  );

  return result;
};

const checkAvailableTempatWisata = async (id) => {
  const result = await TempatWisata.findByPk(id);

  if (!result) throw new NotFoundError(`TempatWisata with ID ${id} Not Found`);
};

module.exports = {
  getTempatWisataAll,
  getTempatWisataById,
  createTempatWisata,
  deleteTempatWisata,
  updateTempatWisata,
  checkAvailableTempatWisata,
};
