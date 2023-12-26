const { sequelize, TourGuide, Place, User } = require('../models');
const { NotFoundError } = require('../errors');

const getAll = async () => {
  return TourGuide.findAll();
};

const getAllByPlaceId = async (id) => {
  const place = await Place.findByPk(id, {
    include: [
      {
        model: TourGuide,
        attributes: ['rating', 'reviews', 'userId'],
        include: {
          model: User, // Assuming you have a User model
          attributes: ['name'],
        },
      },
    ],
  });

  if (!place) {
    // Handle the case where the place with the specified ID is not found
    return null;
  }

  const results = place.TourGuides.map((guide) => ({
    userName: guide.User ? guide.User.name : null,
    rating: guide.rating,
    reviews: guide.reviews,
  }));

  console.log(results);
  return results;
};

const getById = async (id) => {
  return TourGuide.findByPk(id);
};

// const getAllByPlaceId = async (id) => {
//   return TourGuideAvailablePlace.findAll({
//     where: { placeId: id },
//   });
// };

const create = async (payload) => {
  return sequelize.transaction(async (transaction) => {
    const result = await TourGuide.create(payload, { transaction });
    return result;
  });
};

const update = async (id, payload) => {
  return sequelize.transaction(async (transaction) => {
    await TourGuide.update(
      payload,
      {
        where: { id: id },
      },
      { transaction }
    );
  });
};

const remove = async (id) => {
  return await TourGuide.destroy({
    where: { id: id },
  });
};

const checkAvailability = async (id) => {
  const check = await TourGuide.findByPk(id);

  if (!check) {
    throw new NotFoundError(`TourGuide with ID ${id} Not Found`);
  }
};

module.exports = {
  getAll,
  getById,
  getAllByPlaceId,
  create,
  update,
  remove,
  checkAvailability,
};
