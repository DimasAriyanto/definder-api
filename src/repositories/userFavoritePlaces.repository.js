const { sequelize, UserFavoritePlace } = require('../models');
const { NotFoundError } = require('../errors');

const getAll = async (id) => {
  return UserFavoritePlace.findAll({ where: { userId: id } });
};

const getById = async (id) => {
  return UserFavoritePlace.findByPk(id);
};

const create = async (payload) => {
  console.log(payload);
  return sequelize.transaction(async (transaction) => {
    const result = await UserFavoritePlace.create(payload, { transaction });
    return result;
  });
};

const update = async (id, payload) => {
  return sequelize.transaction(async (transaction) => {
    await UserFavoritePlace.update(
      payload,
      {
        where: { id: id },
      },
      { transaction }
    );
  });
};

const remove = async ({ placeId, userId }) => {
  return await UserFavoritePlace.destroy({
    where: { placeId: placeId, userId: userId },
  });
};

const checkAvailability = async (id) => {
  const check = await UserFavoritePlace.findByPk(id);

  if (!check) {
    throw new NotFoundError(`UserFavoritePlace with ID ${id} Not Found`);
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
