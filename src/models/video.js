'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Video.belongsTo(models.TempatWisata)
      Video.belongsTo(models.Review)
    }
  }
  Video.init(
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
      modelName: 'Video',
      tableName: 'Videos',
      underscored: true,
      paranoid: true,
    }
  );
  return Video;
};
