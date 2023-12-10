'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.hasOne(models.Photo, {
        foreignKey: 'reviewId',
      });
      Review.hasOne(models.Video, {
        foreignKey: 'reviewId',
      });
    }
  }
  Review.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      tempatWisataId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      rating: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      komentar: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'Reviews',
      underscored: true,
      paranoid: true,
    }
  );
  return Review;
};
