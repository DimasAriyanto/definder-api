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
      nama: {
        field: 'nama',
        allowNull: true,
        type: Sequelize.STRING
      },
      username: {
        field: 'username',
        allowNull: true,
        type: Sequelize.STRING
      },
      email: {
        field: 'email',
        allowNull: true,
        type: Sequelize.STRING
      },
      nomerTelepon: {
        field: 'nomer_telepon',
        allowNull: true,
        type: Sequelize.STRING
      },
      tanggalLahir: {
        field: 'tangal_lahir',
        allowNull: false,
        type: Sequelize.DATE
      },
      domisili: {
        field: 'domisili',
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        field: 'password',
        allowNull: false,
        type: Sequelize.STRING
      },
      status: {
        field: 'status',
        allowNull: false,
        type: Sequelize.ENUM('Bekerja', 'Mahasiwa/Sekolah')
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