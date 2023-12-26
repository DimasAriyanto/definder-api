const transportationRepository = require('../repositories/transportations.repository');
const userRepository = require('../repositories/users.repository');
const placeRepository = require('../repositories/places.repository');
const { NotFoundError } = require('../errors');

const checkTransportationAvailability = async (id) => {
  const check = await transportationRepository.getById(id);
  if (!check) {
    throw new NotFoundError(`Transportation with ID ${id} Not Found`);
  }
};

const getAll = async () => {
  return transportationRepository.getAll();
};

const getById = async ({ id }) => {
  await checkTransportationAvailability(id);
  return transportationRepository.getById(id);
};

const getTypeByPlaceId = async ({ id }) => {
  await placeRepository.checkAvailability(id);
  return transportationRepository.getTypeByPlaceId(id);
};

const getByPlaceIdAndType = async ({ userId, placeId, type }) => {
  await placeRepository.checkAvailability(placeId);
  const transportations = await transportationRepository.getByPlaceIdAndType(placeId, type);

  const results = [];

  for (const transportation of transportations) {
    const user = await userRepository.getById(userId);

    const result = {
      id: transportation.id,
      name: transportation.name,
      description: transportation.description,
      userName: user ? user.name : null,
    };

    results.push(result);
  }

  return results;
};

const create = async (payload) => {
  return transportationRepository.create(payload);
};

const update = async (id, payload) => {
  await checkTransportationAvailability(id);
  return transportationRepository.update(id, payload);
};

const remove = async ({ id }) => {
  await checkTransportationAvailability(id);
  return transportationRepository.remove(id);
};

module.exports = {
  checkTransportationAvailability,
  getAll,
  getById,
  getTypeByPlaceId,
  getByPlaceIdAndType,
  create,
  update,
  remove,
};
