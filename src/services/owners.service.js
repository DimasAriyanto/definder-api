const ownerRepository = require('../repositories/owners.repository');
const { NotFoundError } = require('../errors');

const checkOwnerAvailability = async (id) => {
  const check = await ownerRepository.getById(id);
  if (!check) {
    throw new NotFoundError(`Owner with ID ${id} Not Found`);
  }
};

const getAll = async () => {
  return ownerRepository.getAll();
};

const getById = async ({ id }) => {
  await checkOwnerAvailability(id);
  return ownerRepository.getById(id);
};

const create = async ({ name, profileLink }) => {
  return ownerRepository.create({ name, profileLink });
};

const update = async ({ id, name, profileLink }) => {
  await checkOwnerAvailability(id);
  return ownerRepository.update(id, { name, profileLink });
};

const remove = async ({ id }) => {
  await checkOwnerAvailability(id);
  return ownerRepository.remove(id);
};

module.exports = { checkOwnerAvailability, getAll, getById, create, update, remove };
