"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Photos", [
      {
        name: "cat",
        link: "https://unsplash.com/photos/E18nZ_OHh04",
        albumId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "cat nomer dva",
        link: "https://unsplash.com/photos/E18nZ_OHh04",
        albumId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
