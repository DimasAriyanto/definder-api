'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Image.belongsTo(models.Place);
    }
  }
  Image.init(
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
        type: DataTypes.UUID,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING
      },
    },
    {
      sequelize,
      modelName: 'Image',
      tableName: 'Images',
      underscored: true,
    }
  );
  return Image;
};
