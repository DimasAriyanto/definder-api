const categoryRepository = require('../repositories/categories.repository');
const { NotFoundError } = require('../errors');

const checkCategoryAvailability = async (id) => {
  const check = await categoryRepository.getById(id);
  if (!check) {
    throw new NotFoundError(`Category with ID ${id} Not Found`);
  }
};

const getAll = async () => {
  return categoryRepository.getAll();
};

const getById = async ({ id }) => {
  await checkCategoryAvailability(id);
  return categoryRepository.getById(id);
};

const create = async ({ nama }) => {
  return categoryRepository.create({ nama });
};

const update = async ({ id, nama }) => {
  await checkCategoryAvailability(id);
  return categoryRepository.update({ id, nama });
};

const remove = async ({ id }) => {
  await checkCategoryAvailability(id);
  return categoryRepository.remove(id);
};

module.exports = { getAll, getById, create, update, remove };
