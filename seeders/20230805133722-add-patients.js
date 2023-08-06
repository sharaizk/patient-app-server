"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("patients", null, {});
    await queryInterface.bulkInsert(
      "patients",
      [
        {
          name: "John Smith",
          age: 35,
          gender: "Male",
          contactInformation: "(555) 555-1234",
          healthHistory: `Hypertension (diagnosed 5 years ago)\nSeasonal allergies (occasional)\nTonsillectomy (performed at age 10)\nChildhood asthma (resolved)\nAppendectomy (performed at age 25\nFractured right wrist (in a sports accident at age 18, healed without complications)\nNo history of chronic illnesses or major surgeries`,
        },
        {
          name: "Maria Smith",
          age: 30,
          gender: "Female",
          contactInformation: "(555) 555-1234",
          healthHistory: `Hypertension (diagnosed 5 years ago)\nSeasonal allergies (occasional)\nTonsillectomy (performed at age 10)\nChildhood asthma (resolved)\nAppendectomy (performed at age 25\nFractured right wrist (in a sports accident at age 18, healed without complications)\nNo history of chronic illnesses or major surgeries`,
        },
        {
          name: "Mark Sear",
          age: 22,
          gender: "Male",
          contactInformation: "(555) 555-1234",
          healthHistory: `Hypertension (diagnosed 5 years ago)\nSeasonal allergies (occasional)\nTonsillectomy (performed at age 10)\nChildhood asthma (resolved)\nAppendectomy (performed at age 25\nFractured right wrist (in a sports accident at age 18, healed without complications)\nNo history of chronic illnesses or major surgeries`,
        },

        {
          name: "John Sear",
          age: 22,
          gender: "Male",
          contactInformation: "(555) 555-1234",
          healthHistory: `Hypertension (diagnosed 5 years ago)\nSeasonal allergies (occasional)\nTonsillectomy (performed at age 10)\nChildhood asthma (resolved)\nAppendectomy (performed at age 25\nFractured right wrist (in a sports accident at age 18, healed without complications)\nNo history of chronic illnesses or major surgeries`,
        },
        {
          name: "Sam kerr",
          age: 30,
          gender: "Female",
          contactInformation: "(555) 555-1234",
          healthHistory: `Hypertension (diagnosed 5 years ago)\nSeasonal allergies (occasional)\nTonsillectomy (performed at age 10)\nChildhood asthma (resolved)\nAppendectomy (performed at age 25\nFractured right wrist (in a sports accident at age 18, healed without complications)\nNo history of chronic illnesses or major surgeries`,
        },
        {
          name: "Alexis",
          age: 24,
          gender: "Male",
          contactInformation: "(555) 555-1234",
          healthHistory: `Hypertension (diagnosed 5 years ago)\nSeasonal allergies (occasional)\nTonsillectomy (performed at age 10)\nChildhood asthma (resolved)\nAppendectomy (performed at age 25\nFractured right wrist (in a sports accident at age 18, healed without complications)\nNo history of chronic illnesses or major surgeries`,
        },

        {
          name: "Ahmad",
          age: 22,
          gender: "Male",
          contactInformation: "(555) 555-1234",
          healthHistory: `Hypertension (diagnosed 5 years ago)\nSeasonal allergies (occasional)\nTonsillectomy (performed at age 10)\nChildhood asthma (resolved)\nAppendectomy (performed at age 25\nFractured right wrist (in a sports accident at age 18, healed without complications)\nNo history of chronic illnesses or major surgeries`,
        },
        {
          name: "Eden",
          age: 30,
          gender: "Male",
          contactInformation: "(555) 555-1234",
          healthHistory: `Hypertension (diagnosed 5 years ago)\nSeasonal allergies (occasional)\nTonsillectomy (performed at age 10)\nChildhood asthma (resolved)\nAppendectomy (performed at age 25\nFractured right wrist (in a sports accident at age 18, healed without complications)\nNo history of chronic illnesses or major surgeries`,
        },
        {
          name: "Alexia",
          age: 24,
          gender: "Female",
          contactInformation: "(555) 555-1234",
          healthHistory: `Hypertension (diagnosed 5 years ago)\nSeasonal allergies (occasional)\nTonsillectomy (performed at age 10)\nChildhood asthma (resolved)\nAppendectomy (performed at age 25\nFractured right wrist (in a sports accident at age 18, healed without complications)\nNo history of chronic illnesses or major surgeries`,
        },

        {
          name: "Manu",
          age: 30,
          gender: "Female",
          contactInformation: "(555) 555-1234",
          healthHistory: `Hypertension (diagnosed 5 years ago)\nSeasonal allergies (occasional)\nTonsillectomy (performed at age 10)\nChildhood asthma (resolved)\nAppendectomy (performed at age 25\nFractured right wrist (in a sports accident at age 18, healed without complications)\nNo history of chronic illnesses or major surgeries`,
        },
        {
          name: "Raquele",
          age: 34,
          gender: "Female",
          contactInformation: "(555) 555-1234",
          healthHistory: `Hypertension (diagnosed 5 years ago)\nSeasonal allergies (occasional)\nTonsillectomy (performed at age 10)\nChildhood asthma (resolved)\nAppendectomy (performed at age 25\nFractured right wrist (in a sports accident at age 18, healed without complications)\nNo history of chronic illnesses or major surgeries`,
        },
        {
          name: "Nicole",
          age: 34,
          gender: "Male",
          contactInformation: "(555) 555-1234",
          healthHistory: `Hypertension (diagnosed 5 years ago)\nSeasonal allergies (occasional)\nTonsillectomy (performed at age 10)\nChildhood asthma (resolved)\nAppendectomy (performed at age 25\nFractured right wrist (in a sports accident at age 18, healed without complications)\nNo history of chronic illnesses or major surgeries`,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("patients", null, {});
  },
};
