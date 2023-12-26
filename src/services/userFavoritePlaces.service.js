const placeRepository = require('../repositories/places.repository');
const imageRepository = require('../repositories/images.repository');
const userFavoritePlaceRepository = require('../repositories/userFavoritePlaces.repository');
const { NotFoundError } = require('../errors');

const checkOwnerAvailability = async (id) => {
  const check = await userFavoritePlaceRepository.getById(id);
  if (!check) {
    throw new NotFoundError(`Owner with ID ${id} Not Found`);
  }
};

const getAll = async (id) => {
  const favorites = await userFavoritePlaceRepository.getAll(id);

  const results = [];

  for (const favorite of favorites) {
    const place = await placeRepository.getById(favorite.placeId);
    const images = await imageRepository.getOneByPlaceId(place.id);

    const result = {
      favoriteId: favorite.id,
      placeId: place.id,
      image: images ? images.image : null,
      name: place ? place.name : null,
      location: place ? place.location : null,
      rating: place ? place.rating : null,
      reviews: place ? place.reviews : null,
    };

    results.push(result);
  }

  return results;
};

const getById = async ({ id }) => {
  await checkOwnerAvailability(id);
  return userFavoritePlaceRepository.getById(id);
};

const create = async (payload) => {
  return userFavoritePlaceRepository.create(payload);
};

const update = async (id, payload) => {
  // await checkOwnerAvailability(id);
  return userFavoritePlaceRepository.update(id, payload);
};

const remove = async (payload) => {
  // await checkOwnerAvailability(id);
  return userFavoritePlaceRepository.remove(payload);
};

module.exports = { checkOwnerAvailability, getAll, getById, create, update, remove };
