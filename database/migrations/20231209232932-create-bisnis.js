'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bisnis', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      tempatWisataId: {
        field: 'tempat_wisata_id',
        allowNull: false,
        references: {
          model: 'TempatWisata',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.UUID,
      },
      nama: {
        field: 'nama',
        allowNull:false,
        type: Sequelize.STRING
      },
      deskripsi: {
        field: 'deskripsi',
        allowNull: false,
        type: Sequelize.TEXT
      },
      email: {
        field: 'email',
        allowNull: true,
        type: Sequelize.STRING
      },
      situsWeb: {
        field: 'situs_web',
        allowNull: true,
        type: Sequelize.STRING
      },
      nomerTelepon: {
        field: 'nomer_telepon',
        allowNull: true,
        type: Sequelize.STRING
      },
      rating: {
        field: 'rating',
        allowNull: false,
        type: Sequelize.INTEGER
      },
      jumlahReview: {
        field: 'jumlah_review',
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Bisnis');
  }
};