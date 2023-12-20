'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TourGuideAvailablePlace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TourGuideAvailablePlace.init(
    {
      tourGuideId: {
        field: 'tour_guide_id',
        allowNull: false,
        references: {
          model: 'TourGuides',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        type: DataTypes.UUID,
      },
      placeId: {
        field: 'place_id',
        allowNull: false,
        references: {
          model: 'Places',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: 'TourGuideAvailablePlace',
      tableName: 'TourGuideAvailablePlaces',
      underscored: true,
      paranoid: true,
    }
  );
  return TourGuideAvailablePlace;
};
