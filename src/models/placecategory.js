'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlaceCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PlaceCategory.init(
    {
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
        type: DataTypes.UUID,
      },
      categoryId: {
        field: 'category_id',
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: 'PlaceCategory',
      tableName: 'PlaceCategories',
      underscored: true,
      paranoid: true,
      timestamps: false,
    }
  );
  return PlaceCategory;
};
