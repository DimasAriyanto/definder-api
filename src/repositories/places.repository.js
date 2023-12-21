const { Sequelize } = require('sequelize');
const { sequelize, Place } = require('../models');
const Op = Sequelize.Op;
const { NotFoundError } = require('../errors');

const getAll = async () => {
  return Place.findAll();
};

const getById = async (id) => {
  return Place.findByPk(id);
};

const getByName = async (name) => {
  console.log(name);
  return sequelize.transaction(async (transaction) => {
    const result = await Place.findAll(
      {
        where: sequelize.where(
          sequelize.fn('LOWER', sequelize.col('name')),
          'LIKE',
          `%${name.toLowerCase()}%`
        ),
      },
      { transaction }
    );
    return result;
  });
};

const getByNameAndProvinci = async (name, location) => {
  return sequelize.transaction(async (transaction) => {
    const result = await Place.findAll(
      {
        where: {
          [Op.and]: [
            sequelize.where(
              sequelize.fn('LOWER', sequelize.col('name')),
              'LIKE',
              `%${name.toLowerCase()}%`
            ),
            sequelize.where(
              sequelize.fn('LOWER', sequelize.col('location')),
              'LIKE',
              `%${location.toLowerCase()}%`
            ),
          ],
        },
      },
      { transaction }
    );

    return result;
  });
};

const create = async (payload) => {
  return sequelize.transaction(async (transaction) => {
    const result = await Place.create(payload, { transaction });
    return result;
  });
};

const update = async (id, payload) => {
  return sequelize.transaction(async (transaction) => {
    await Place.update(
      payload,
      {
        where: { id: id },
      },
      { transaction }
    );
  });
};

const updateRatingAndReview = async (id, payload) => {
  return sequelize.transaction(async (transaction) => {
    await Place.update(
      payload,
      {
        where: { id: id },
      },
      { transaction }
    );
  });
};

const remove = async (id) => {
  return await Place.destroy({
    where: { id: id },
  });
};

const checkAvailability = async (id) => {
  const check = await Place.findByPk(id);

  if (!check) {
    throw new NotFoundError(`Place with ID ${id} Not Found`);
  }
};

module.exports = {
  getAll,
  getById,
  getByName,
  getByNameAndProvinci,
  create,
  update,
  updateRatingAndReview,
  remove,
  checkAvailability,
};
