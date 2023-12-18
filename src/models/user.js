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
      // User.belongsToMany(models.TempatWisata, {
      //   through: 'Review',
      // });
      // User.belongsToMany(models.Category, {
      //   through: 'UserFavoriteCategory',
      // });
      // User.belongsToMany(models.TempatWisata, {
      //   through: 'UserFavoriteTempatWisata',
      // });
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      role:{
        allowNull: false,
        defaultValue: 'umum',
        type: DataTypes.ENUM('admin', 'umum')
      },
      password: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      googleId: {
        allowNull: true,
        type: DataTypes.STRING
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
