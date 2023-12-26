'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Description extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Description.belongsTo(models.Place);
    }
  }
  Description.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      placeId: {
        field: 'place_id',
        allowNull: false,
        references: {
          model: 'Places',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      content: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Description',
      // tableName: 'Descriptions',
      underscored: true,
      timestamps: false,
    }
  );
  return Description;
};
