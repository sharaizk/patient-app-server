"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});

    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          password: "123456789",
          email: "seedtest1@test.com",
        },
        {
          name: "John Mark",
          password: "123456789",
          email: "seedtest2@test.com",
        },
        {
          name: "Alex",
          password: "123456789",
          email: "seedtest3@test.com",
        },
        {
          name: "Alicia Sear",
          password: "123456789",
          email: "seedtest4@test.com",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
