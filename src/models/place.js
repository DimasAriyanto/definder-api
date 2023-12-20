'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Place.belongsTo(models.Owner);
      Place.hasOne(models.Review, {
        foreignKey: 'placeId',
      });
      Place.hasOne(models.Image, {
        foreignKey: 'placeId',
      });
      Place.hasOne(models.SocialMedia, {
        foreignKey: 'placeId',
      });
      Place.belongsToMany(models.Category, {
        through: 'PlaceCategory',
      });
      Place.belongsToMany(models.TourGuide, {
        through: 'TourGuideAvailablePlace',
      });
      Place.belongsToMany(models.User, {
        through: 'Wishlist',
      });
    }
  }
  Place.init(
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      ownerId: {
        field: 'owner_id',
        allowNull: false,
        references: {
          model: 'Owners',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: DataTypes.UUID,
      },
      mainCategory: {
        field: 'main_category',
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      descreption: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      reviewLink: {
        field: 'review_link',
        allowNull: false,
        type: DataTypes.STRING,
      },
      mapsLink: {
        field: 'maps_link',
        allowNull: false,
        type: DataTypes.STRING,
      },
      coordinates: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      plusCode: {
        field: 'plus_code',
        allowNull: true,
        type: DataTypes.STRING,
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      addressWard: {
        field: 'address_ward',
        allowNull: false,
        type: DataTypes.STRING,
      },
      addressStreet: {
        field: 'address_street',
        allowNull: false,
        type: DataTypes.STRING,
      },
      addressCity: {
        field: 'address_city',
        allowNull: false,
        type: DataTypes.STRING,
      },
      addressPostalCode: {
        field: 'address_postal_code',
        allowNull: false,
        type: DataTypes.STRING,
      },
      addressState: {
        field: 'address_state',
        allowNull: false,
        type: DataTypes.STRING,
      },
      addressCountryCode: {
        field: 'address_country_code',
        allowNull: false,
        type: DataTypes.STRING,
      },
      timeZone: {
        field: 'time_zone',
        allowNull: true,
        type: DataTypes.STRING,
      },
      workdayTiming: {
        field: 'workday_timing',
        allowNull: false,
        type: DataTypes.STRING,
      },
      hours: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      closedOn: {
        field: 'closed_on',
        allowNull: true,
        type: DataTypes.STRING,
      },
      mostPopulerTimes: {
        field: 'most_populer_times',
        allowNull: true,
        type: DataTypes.STRING,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      priceRange: {
        field: 'price_range',
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      rating: {
        allowNull: false,
        type: DataTypes.DECIMAL(2, 1),
      },
      reviews: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Place',
      tableName: 'Places',
      underscored: true,
      paranoid: true,
    }
  );
  return Place;
};
