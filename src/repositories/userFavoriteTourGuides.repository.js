const { sequelize, UserFavoriteTourGuide } = require('../models');
const { NotFoundError } = require('../errors');

const getAll = async (id) => {
  return UserFavoriteTourGuide.findAll({ where: { userId: id } });
};

const getById = async (id) => {
  return UserFavoriteTourGuide.findByPk(id);
};

const create = async (payload) => {
  return sequelize.transaction(async (transaction) => {
    const result = await UserFavoriteTourGuide.create(payload, { transaction });
    return result;
  });
};

const update = async (id, payload) => {
  return sequelize.transaction(async (transaction) => {
    await UserFavoriteTourGuide.update(
      payload,
      {
        where: { id: id },
      },
      { transaction }
    );
  });
};

const remove = async ({ tourGuideId, userId }) => {
  return await UserFavoritePlace.destroy({
    where: { tourGuideId: tourGuideId, userId: userId },
  });
};

const checkAvailability = async (id) => {
  const check = await UserFavoriteTourGuide.findByPk(id);

  if (!check) {
    throw new NotFoundError(`UserFavoriteTourGuide with ID ${id} Not Found`);
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
