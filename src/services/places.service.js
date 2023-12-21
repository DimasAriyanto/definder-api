const placeRepository = require('../repositories/places.repository');
const placeCategoryRepository = require('../repositories/placeCategory.repository');
const ownerRepository = require('../repositories/owners.repository');
const imageRepository = require('../repositories/images.repository');
const { NotFoundError } = require('../errors');

const checkPlaceAvailability = async (id) => {
  const check = await placeRepository.getById(id);
  if (!check) {
    throw new NotFoundError(`Place with ID ${id} Not Found`);
  }
};

const getAll = async () => {
  return await placeRepository.getAll();
};

const getById = async ({ id }) => {
  await checkPlaceAvailability(id);
  return placeRepository.getById(id);
};

const search = async (name) => {
  const result = placeRepository.getByName(name);
  if (!result) {
    throw new NotFoundError(`Place with name ${name} Not Found`);
  }

  return result;
};

const getByNameAndProvinci = async (payload) => {
  const result = placeRepository.getByNameAndProvinci(payload);
  if (!result) {
    throw new NotFoundError(`Place Not Found`);
  }

  return result;
};

const create = async (payload) => {
  await placeRepository.create(payload);
};

const update = async (id, payload) => {
  await checkPlaceAvailability(id);
  return placeRepository.update(id, payload);
};

const remove = async ({ id }) => {
  await checkPlaceAvailability(id);
  return placeRepository.remove(id);
};

module.exports = { getAll, getById, search, getByNameAndProvinci, create, update, remove };
