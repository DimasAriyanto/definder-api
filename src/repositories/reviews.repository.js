const { sequelize, Review } = require('../models');
const { NotFoundError } = require('../errors');

const getAll = async () => {
  return Review.findAll();
};

const getById = async (id) => {
  return Review.findByPk(id);
};

const create = async (payload) => {
  return sequelize.transaction(async (transaction) => {
    const result = await Review.create(payload, { transaction });
    return result;
  });
};

const update = async (id, payload) => {
  return sequelize.transaction(async (transaction) => {
    await Review.update(
      payload,
      {
        where: { id: id },
      },
      { transaction }
    );
  });
};

const remove = async (id) => {
  return await Review.destroy({
    where: { id: id },
  });
};

const checkAvailability = async (id) => {
  const check = await Review.findByPk(id);

  if (!check) {
    throw new NotFoundError(`Review with ID ${id} Not Found`);
  }
};

const countRatingByPlace = async (id) => {
  return await Review.count({
    where: {
      placeId: id,
    },
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  checkAvailability,
  countRatingByPlace,
};
