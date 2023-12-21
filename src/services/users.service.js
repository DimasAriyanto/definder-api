const bcrypt = require('bcrypt');
const userRepository = require('../repositories/users.repository');
const { NotFoundError, BadRequestError } = require('../errors');

const checkUserAvailability = async (id) => {
  const check = await userRepository.getById(id);
  if (!check) {
    throw new NotFoundError(`User with ID ${id} Not Found`);
  }
};

const checkAvailabilityUserWithEmail = async (id) => {
  const check = await userRepository.getByEmail(id);
  if (check) {
    throw new BadRequestError('User has already been used!');
  }
};

const getAll = async () => {
  return userRepository.getAll();
};

const getById = async ({ id }) => {
  await checkUserAvailability(id);
  return userRepository.getById(id);
};

const create = async ({ name, email, password, password_confirmation }) => {
  if (password !== password_confirmation) {
    throw new BadRequestError('Please ensure that the password and password confirmation match!');
  }

  await checkAvailabilityUserWithEmail(email);

  const encryptedPassword = await bcrypt.hash(password, 10);
  return await userRepository.create({ name, email, password: encryptedPassword });
};

const update = async ({ id, name, email, password }) => {
  await checkUserAvailability(id);
  await checkAvailabilityUserWithEmail(email);

  const encryptedPassword = await bcrypt.hash(password, 10);

  return userRepository.update({ id, name, email, password: encryptedPassword });
};

const remove = async ({ id }) => {
  await checkUserAvailability(id);
  return userRepository.remove(id);
};

module.exports = { getAll, getById, create, update, remove };
