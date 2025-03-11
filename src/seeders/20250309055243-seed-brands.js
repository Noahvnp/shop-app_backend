"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "brands",
      [
        {
          name: "Apple",
          image: "https://example.com/apple.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Samsung",
          image: "https://example.com/samsung.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Sony",
          image: "https://example.com/sony.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Nike",
          image: "https://example.com/nike.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Adidas",
          image: "https://example.com/adidas.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Xiaomi",
          image: "https://example.com/xiaomi.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Dell",
          image: "https://example.com/dell.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "HP",
          image: "https://example.com/hp.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Puma",
          image: "https://example.com/puma.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Gucci",
          image: "https://example.com/gucci.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("brands", null, {});
  },
};
