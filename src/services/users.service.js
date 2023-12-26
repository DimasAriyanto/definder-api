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

const whoAmI = async ({ id }) => {
  await checkUserAvailability(id);
  return userRepository.whoAmI(id);
};

const create = async ({ name, email, password, password_confirmation }) => {
  if (password !== password_confirmation) {
    throw new BadRequestError('Please ensure that the password and password confirmation match!');
  }

  await checkAvailabilityUserWithEmail(email);

  const encryptedPassword = await bcrypt.hash(password, 10);
  return await userRepository.create({ name, email, password: encryptedPassword });
};

const update = async ({ id, name, email }) => {
  await checkUserAvailability(id);

  return userRepository.update({ id, name, email });
};

const updatePassword = async ({ id, oldPassword, newPassword }) => {
  await checkUserAvailability(id);

  const user = await userRepository.getById(id);

  const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);

  if (!isPasswordMatch) {
    throw new BadRequestError('Old password is incorrect!');
  }

  const encryptedNewPassword = await bcrypt.hash(newPassword, 10);

  return userRepository.updatePassword({ id, password: encryptedNewPassword });
};

const remove = async ({ id }) => {
  await checkUserAvailability(id);
  return userRepository.remove(id);
};

module.exports = { getAll, getById, whoAmI, create, update, updatePassword, remove };
