'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'A320',
        capacity: 180,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'A321',
        capacity: 220,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'B737-800',
        capacity: 189,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'B737 MAX 8',
        capacity: 210,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'A350-900',
        capacity: 325,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'B787-9',
        capacity: 296,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'A380-800',
        capacity: 555,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'ATR 72',
        capacity: 78,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'CRJ900',
        capacity: 90,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Embraer E190',
        capacity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Airplanes', null, {});
  }
};