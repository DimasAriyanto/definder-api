'use strict';
const {
  Model
} = require('sequelize');
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
  TourGuideAvailablePlace.init({
    placeId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'TourGuideAvailablePlace',
  });
  return TourGuideAvailablePlace;
};