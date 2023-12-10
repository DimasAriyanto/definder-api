'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bisnis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bisnis.belongsTo(models.TempatWisata)
    }
  }
  Bisnis.init(
    {
      lokasiId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      nama: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      deskripsi: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      situsWeb: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      nomerTelepon: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      rating: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      jumlahReview: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Bisnis',
      tableName: 'Bisnis',
      underscored: true,
      paranoid: true,
    }
  );
  return Bisnis;
};
