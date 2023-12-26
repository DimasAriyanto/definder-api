'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Places', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      location: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: true,
        type: Sequelize.DECIMAL,
      },
      rating: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      reviews: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Places');
  },
};
