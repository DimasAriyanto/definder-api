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
      User.hasOne(models.TourGuide, {
        foreignKey: 'userId',
      });
      User.hasMany(models.Review, {
        foreignKey: 'userId',
      });
      User.hasMany(models.Mbti, {
        foreignKey: 'userId',
      });
      User.hasMany(models.Transportation, {
        foreignKey: 'userId',
      });
      User.belongsToMany(models.TourGuide, {
        through: 'UserFavoriteTourGuide',
      });
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
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
      isVerified: {
        field: 'is_verified',
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      password: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'Users',
      underscored: true,
      timestamps: false,
    }
  );
  return User;
};
