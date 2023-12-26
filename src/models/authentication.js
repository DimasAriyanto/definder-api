'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class authentication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  authentication.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      token: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'authentication',
      tableName: 'authentications',
      underscored: true,
      timestamps: false,
    }
  );
  return authentication;
};
