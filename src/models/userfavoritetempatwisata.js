'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserFavoriteTempatWisata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserFavoriteTempatWisata.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      tempatWisataId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: 'UserFavoriteTempatWisata',
      tableName: 'UserFavoriteTempatWisata',
      underscored: true,
      paranoid: true,
    }
  );
  return UserFavoriteTempatWisata;
};
