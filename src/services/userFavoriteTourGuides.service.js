const tourGuideRepository = require('../repositories/tourGuide.repository');
const userRepository = require('../repositories/users.repository');
const userFavoriteTourGuideRepository = require('../repositories/userFavoriteTourGuides.repository');
const { NotFoundError } = require('../errors');

const checkOwnerAvailability = async (id) => {
  const check = await userFavoriteTourGuideRepository.getById(id);
  if (!check) {
    throw new NotFoundError(`Owner with ID ${id} Not Found`);
  }
};

const getAll = async (id) => {
  const favorites = await userFavoriteTourGuideRepository.getAll(id);

  const results = [];

  for (const favorite of favorites) {
    const tourGuide = await tourGuideRepository.getById(favorite.tourGuideId);
    const user = await userRepository.getById(favorite.userId);

    const result = {
      favoriteId: favorite.id,
      tourGuideId: tourGuide.id,
      image: null,
      name: user ? user.name : null,
      rating: tourGuide ? tourGuide.rating : null,
      reviews: tourGuide ? tourGuide.reviews : null,
    };

    results.push(result);
  }

  return results;
};

const getById = async ({ id }) => {
  await checkOwnerAvailability(id);
  return userFavoriteTourGuideRepository.getById(id);
};

const create = async (payload) => {
  return userFavoriteTourGuideRepository.create(payload);
};

const update = async (id, payload) => {
  await checkOwnerAvailability(id);
  return userFavoriteTourGuideRepository.update(id, payload);
};

const remove = async (payload) => {
  // await checkOwnerAvailability(id);
  return userFavoriteTourGuideRepository.remove(payload);
};

module.exports = { checkOwnerAvailability, getAll, getById, create, update, remove };
