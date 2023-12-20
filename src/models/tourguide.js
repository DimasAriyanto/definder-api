'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TourGuide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TourGuide.belongsTo(models.User);
      TourGuide.hasMany(models.Article, {
        foreignKey: 'tourGuideId',
      });
      TourGuide.belongsToMany(models.Place, {
        through: 'TourGuideAvailablePlace',
      });
    }
  }
  TourGuide.init(
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID
      },
      userId: {
        field: 'user_id',
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: DataTypes.UUID,
      },
      experience: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      languageSpoken: {
        field: 'language_spoken',
        allowNull: false,
        type: DataTypes.STRING
      },
      specializations: {
        allowNull: false,
        type: DataTypes.STRING
      },
      certifications: {
        allowNull: false,
        type: DataTypes.STRING
      },
      availabilitySchedule: {
        field: 'availability_schedule',
        allowNull: false,
        type: DataTypes.STRING
      },
      cost: {
        allowNull: false,
        type: DataTypes.DECIMAL
      },
    },
    {
      sequelize,
      modelName: 'TourGuide',
      tableName: 'TourGuides',
      underscored: true,
      paranoid: true,
    }
  );
  return TourGuide;
};
