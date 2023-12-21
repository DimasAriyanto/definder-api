const { sequelize, Image } = require('../models');
const { NotFoundError } = require('../errors');

const getAll = async () => {
  return Image.findAll();
};

const getById = async (id) => {
  return Image.findByPk(id);
};

const getByPlaceId = async (id) => {
  return Image.findOne({
    where: { placeId: id },
  });
};

const create = async (payload) => {
  return sequelize.transaction(async (transaction) => {
    const result = await Image.create(payload, { transaction });
    return result;
  });
};

const update = async (id, payload) => {
  return sequelize.transaction(async (transaction) => {
    await Image.update(
      payload,
      {
        where: { id: id },
      },
      { transaction }
    );
  });
};

const remove = async (id) => {
  return await Image.destroy({
    where: { id: id },
  });
};

const checkAvailability = async (id) => {
  const check = await Image.findByPk(id);

  if (!check) {
    throw new NotFoundError(`Image with ID ${id} Not Found`);
  }
};

module.exports = {
  getAll,
  getById,
  getByPlaceId,
  create,
  update,
  remove,
  checkAvailability,
};
