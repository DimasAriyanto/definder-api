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
      TourGuide.belongsToMany(models.User, {
        through: 'UserFavoriteTourGuide',
      });
    }
  }
  TourGuide.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
      },
      rating: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      reviews: {
        allowNull: false,
        type: DataTypes.INTEGER,
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
      timestamps: false,
    }
  );
  return TourGuide;
};
