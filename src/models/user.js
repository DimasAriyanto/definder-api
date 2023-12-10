'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.TempatWisata, {
        through: 'Review',
      });
      User.belongsToMany(models.Category, {
        through: 'UserFavoriteCategory',
      });
      User.belongsToMany(models.TempatWisata, {
        through: 'UserFavoriteTempatWisata',
      });
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      nomerTelepon: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      tanggalLahir: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      domisili: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'Users',
      underscored: true,
      paranoid: true,
    }
  );
  return User;
};
