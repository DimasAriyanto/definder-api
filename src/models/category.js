'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Category.hasMany(models.TempatWisata, {
      //   foreignKey: 'categoryId',
      // });
      Category.belongsToMany(models.Place, {
        through: 'PlaceCategory',
      });
    }
  }
  Category.init(
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Category',
      tableName: 'Categories',
      underscored: true,
      paranoid: true,
    }
  );
  return Category;
};
