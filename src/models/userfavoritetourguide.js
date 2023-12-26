'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserFavoriteTourGuide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserFavoriteTourGuide.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      tourGuideId: {
        field: 'tour_guide_id',
        allowNull: true,
        references: {
          model: 'TourGuides',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: DataTypes.INTEGER,
      },
      userId: {
        field: 'user_id',
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'UserFavoriteTourGuide',
      tableName: 'UserFavoriteTourGuides',
      underscored: true,
      timestamps: false,
    }
  );
  return UserFavoriteTourGuide;
};
