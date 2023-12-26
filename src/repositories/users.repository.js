const { sequelize, User } = require('../models');

const getAll = async () => {
  return User.findAll();
};

const getById = async (id) => {
  return User.findByPk(id);
};

const whoAmI = async (id) => {
  return User.findByPk(id);
};

const getByEmail = async (email) => {
  return sequelize.transaction(async (transaction) => {
    const result = await User.findOne({ where: { email } }, { transaction });
    return result;
  });
};

const create = async (payload) => {
  return sequelize.transaction(async (transaction) => {
    const result = await User.create(payload, { transaction });
    return result;
  });
};

const update = async ({ id, name, email }) => {
  return sequelize.transaction(async (transaction) => {
    await User.update(
      {
        name: name,
        email: email,
      },
      {
        where: { id: id },
      },
      { transaction }
    );
  });
};

const updatePassword = async ({ id, password }) => {
  return sequelize.transaction(async (transaction) => {
    await User.update(
      {
        password: password,
      },
      {
        where: { id: id },
      },
      { transaction }
    );
  });
};

const updateActivate = async (email) => {
  return sequelize.transaction(async (transaction) => {
    await User.update(
      {
        isVerified: true,
      },
      {
        where: { email: email },
      },
      { transaction }
    );
  });
};

const remove = async (id) => {
  return await User.destroy({
    where: { id: id },
  });
};

module.exports = { getAll, getById, whoAmI, getByEmail, create, update, updatePassword, updateActivate, remove };
