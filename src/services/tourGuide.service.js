const placeRepository = require('../repositories/places.repository');
const tourGuideRepository = require('../repositories/tourGuide.repository');
const { NotFoundError } = require('../errors');

const checkTourGuideAvailability = async (id) => {
  const check = await tourGuideRepository.getById(id);
  if (!check) {
    throw new NotFoundError(`TourGuide with ID ${id} Not Found`);
  }
};

const getAll = async () => {
  return tourGuideRepository.getAll();
};

const getById = async ({ id }) => {
  await checkTourGuideAvailability(id);
  return tourGuideRepository.getById(id);
};

const getByPlaceId = async ({ id }) => {
  await placeRepository.checkAvailability(id);
  return tourGuideRepository.getAllByPlaceId(id);
};

const create = async (payload) => {
  return tourGuideRepository.create(payload);
};

const update = async (id, payload) => {
  await checkTourGuideAvailability(id);
  return tourGuideRepository.update(id, payload);
};

const remove = async ({ id }) => {
  await checkTourGuideAvailability(id);
  return tourGuideRepository.remove(id);
};

module.exports = {
  checkTourGuideAvailability,
  getAll,
  getById,
  getByPlaceId,
  create,
  update,
  remove,
};
