'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TempatWisata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TempatWisata.belongsTo(models.Category);
      TempatWisata.hasOne(models.Photo, {
        foreignKey: 'tempatWisataId',
      });
      TempatWisata.hasOne(models.Video, {
        foreignKey: 'tempatWisataId',
      });
      TempatWisata.hasMany(models.Bisnis, {
        foreignKey: 'lokasiId',
      });
      TempatWisata.hasMany(models.Rute, {
        as: 'LokasiAwal',
        foreignKey: 'idLokasiAwal',
      });
      TempatWisata.hasMany(models.Rute, {
        as: 'LokasiAkhir',
        foreignKey: 'idLokasiAkhir',
      });
      // TempatWisata.belongsToMany(models.User, {
      //   through: 'Review',
      // });
      // TempatWisata.belongsToMany(models.User, {
      //   through: 'UserFavoriteTempatWisata',
      // });
    }
  }
  TempatWisata.init(
    {
      categoryId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      nama: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      alamat: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      koordinat: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 8),
      },
      mapsUrl: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      rating: {
        allowNull: false,
        type: DataTypes.DECIMAL(2, 1),
      },
      jumlahReview: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      deskripsi: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'TempatWisata',
      tableName: 'TempatWisata',
      underscored: true,
      paranoid: true,
    }
  );
  return TempatWisata;
};
