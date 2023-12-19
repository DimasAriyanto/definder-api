'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Places', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID,
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
        type: Sequelize.UUID,
      },
      mainCategory: {
        field: 'main_category',
        allowNull: false,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      descreption: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      reviewLink: {
        field: 'review_link',
        allowNull: false,
        type: Sequelize.STRING,
      },
      mapsLink: {
        field: 'maps_link',
        allowNull: false,
        type: Sequelize.STRING,
      },
      coordinates: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      plusCode: {
        field: 'plus_code',
        allowNull: true,
        type: Sequelize.STRING,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      addressWard: {
        field: 'address_ward',
        allowNull: false,
        type: Sequelize.STRING,
      },
      addressStreet: {
        field: 'address_street',
        allowNull: false,
        type: Sequelize.STRING,
      },
      addressCity: {
        field: 'address_city',
        allowNull: false,
        type: Sequelize.STRING,
      },
      addressPostalCode: {
        field: 'address_postal_code',
        allowNull: false,
        type: Sequelize.STRING,
      },
      addressState: {
        field: 'address_state',
        allowNull: false,
        type: Sequelize.STRING,
      },
      addressCountryCode: {
        field: 'address_country_code',
        allowNull: false,
        type: Sequelize.STRING,
      },
      timeZone: {
        field: 'time_zone',
        allowNull: true,
        type: Sequelize.STRING,
      },
      workdayTiming: {
        field: 'workday_timing',
        allowNull: false,
        type: Sequelize.STRING,
      },
      hours: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      closedOn: {
        field: 'closed_on',
        allowNull: true,
        type: Sequelize.STRING,
      },
      mostPopulerTimes: {
        field: 'most_populer_times',
        allowNull: true,
        type: Sequelize.STRING,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      priceRange: {
        field: 'price_range',
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      rating: {
        allowNull: false,
        type: Sequelize.DECIMAL(2,1),
      },
      reviews: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
      deletedAt: {
        field: 'deleted_at',
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Places');
  },
};
