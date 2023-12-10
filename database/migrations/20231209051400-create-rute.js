'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rutes', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      idLokasiAwal: {
        field: 'id_lokasi_awal',
        allowNull: false,
        references: {
          model: 'TempatWisata',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.UUID,
      },
      idLokasiAkhir: {
        field: 'id_lokasi_akhir',
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'TempatWisata',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      jarak: {
        field: 'jarak',
        allowNull: false,
        type: Sequelize.DECIMAL(10,2),
      },
      durasi: {
        field: 'durasi',
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
    await queryInterface.dropTable('Rutes');
  }
};