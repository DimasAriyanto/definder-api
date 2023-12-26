'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Place.hasMany(models.Review, {
        foreignKey: 'placeId',
      });
      Place.hasMany(models.Image, {
        foreignKey: 'placeId',
      });
      Place.hasMany(models.Description, {
        foreignKey: 'placeId',
      });
      Place.hasMany(models.Transportation, {
        foreignKey: 'placeId',
      });
      Place.belongsToMany(models.Category, {
        through: 'PlaceCategory',
      });
      Place.belongsToMany(models.TourGuide, {
        through: 'TourGuideAvailablePlace',
      });
      Place.belongsToMany(models.User, {
        through: 'UserFavoritePlace',
      });
    }
  }
  Place.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      location: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: true,
        type: DataTypes.DECIMAL,
      },
      rating: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      reviews: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Place',
      tableName: 'Places',
      underscored: true,
      timestamps: false,
    }
  );
  return Place;
};
