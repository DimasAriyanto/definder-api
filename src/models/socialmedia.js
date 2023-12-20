'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SocialMedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SocialMedia.belongsTo(models.Place);
    }
  }
  SocialMedia.init(
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
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
        type: DataTypes.UUID,
      },
      website: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      instagram: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      facebook: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      twitter: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      threads: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      youtube: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'SocialMedia',
      tableName: 'SocialMedia',
      underscored: true,
      paranoid: true,
    }
  );
  return SocialMedia;
};
