'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Photo.belongsTo(models.TempatWisata)
      Photo.belongsTo(models.Review)

    }
  }
  Photo.init(
    {
      tempatWisataId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      reviewId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      url: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      deskripsi: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Photo',
      tableName: 'Photos',
      underscored: true,
      paranoid: true,
    }
  );
  return Photo;
};
