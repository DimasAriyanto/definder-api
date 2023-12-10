'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rute.belongsTo(models.TempatWisata);
    }
  }
  Rute.init(
    {
      idLokasiAwal: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      idLokasiAkhir: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      jarak: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2),
      },
      durasi: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Rute',
      tableName: 'Rutes',
      underscored: true,
      paranoid: true,
    }
  );
  return Rute;
};
