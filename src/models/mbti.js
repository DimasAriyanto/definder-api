'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mbti extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mbti.belongsTo(models.User)
    }
  }
  Mbti.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        field: 'user_id',
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: DataTypes.INTEGER,
      },
      mbti: {
        allowNull: false,
        type: DataTypes.STRING,
      }
    },
    {
      sequelize,
      modelName: 'Mbti',
      tableName: 'Mbtis',
      underscored: true,
      timestamps: false,
    }
  );
  return Mbti;
};
