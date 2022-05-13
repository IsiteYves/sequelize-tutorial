"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "User",
      [
        {
          name: "John Doe",
          email: "johndoe@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kalisa Kretty",
          email: "Kretty Kalisa@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "User3",
          email: "user3@test.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
