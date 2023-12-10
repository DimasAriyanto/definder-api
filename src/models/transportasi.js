'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transportasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transportasi.init(
    {
      nama: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      jenis: {
        allowNull: false,
        type: DataTypes.ENUM('sepeda motor', 'mobil', 'kereta'),
      },
      biaya: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      waktuTempuh: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Transportasi',
      tableName: 'Transportasis',
      underscored: true,
      paranoid: true,
    }
  );
  return Transportasi;
};
