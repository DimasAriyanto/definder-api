const imageRepository = require('../repositories/images.repository');
const placeRepository = require('../repositories/places.repository');
const { NotFoundError } = require('../errors');

const checkImageAvailability = async (id) => {
  const check = await imageRepository.getById(id);
  if (!check) {
    throw new NotFoundError(`Image with ID ${id} Not Found`);
  }
};

const getAll = async () => {
  return imageRepository.getAll();
};

const getById = async ({ id }) => {
  await checkImageAvailability(id);
  return imageRepository.getById(id);
};

const create = async (payload) => {
  return imageRepository.create(payload);
};

const update = async ({ id, placeId, image }) => {
  await checkImageAvailability(id);
  await placeRepository.checkAvailability(placeId);
  return imageRepository.update(id, { placeId, image });
};

const remove = async ({ id }) => {
  await checkImageAvailability(id);
  return imageRepository.remove(id);
};

module.exports = { checkImageAvailability, getAll, getById, create, update, remove };
