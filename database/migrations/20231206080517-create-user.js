'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        field: 'name',
        allowNull: true,
        type: Sequelize.STRING
      },
      email: {
        field: 'email',
        allowNull: false,
        type: Sequelize.STRING
      },
      role:{
        field: 'role',
        allowNull: false,
        defaultValue: 'umum',
        type: Sequelize.ENUM('admin', 'umum')
      },
      password: {
        field: 'password',
        allowNull: true,
        type: Sequelize.STRING
      },
      googleId: {
        field: 'google_id',
        allowNull: true,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Users');
  }
};