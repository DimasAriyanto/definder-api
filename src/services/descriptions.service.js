const placeRepository = require('../repositories/places.repository');
const descriptionRepository = require('../repositories/descriptions.repository');
const { NotFoundError } = require('../errors');

const checkDescriptionAvailability = async (id) => {
  const check = await descriptionRepository.getById(id);
  if (!check) {
    throw new NotFoundError(`Description with ID ${id} Not Found`);
  }
};

const getAll = async () => {
  return descriptionRepository.getAll();
};

const getById = async ({ id }) => {
  await checkDescriptionAvailability(id);
  return descriptionRepository.getById(id);
};

const getByPlaceId = async ({ id }) => {
  await placeRepository.checkAvailability(id);
  return descriptionRepository.getByPlaceId(id);
};

const create = async (payload) => {
  return descriptionRepository.create(payload);
};

const update = async (id, payload) => {
  await checkDescriptionAvailability(id);
  return descriptionRepository.update(id, payload);
};

const remove = async ({ id }) => {
  await checkDescriptionAvailability(id);
  return descriptionRepository.remove(id);
};

module.exports = {
  checkDescriptionAvailability,
  getAll,
  getById,
  getByPlaceId,
  create,
  update,
  remove,
};
