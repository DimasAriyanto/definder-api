'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transportasis', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      nama: {
        field: 'nama',
        allowNull: false,
        type: Sequelize.STRING,
      },
      jenis: {
        field: 'jenis',
        allowNull: false,
        type: Sequelize.ENUM('sepeda motor', 'mobil', 'kereta'),
      },
      biaya: {
        field: 'biaya',
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      waktuTempuh: {
        field: 'waktu_tempuh',
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
    await queryInterface.dropTable('Transportasis');
  },
};
