"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Điện tử",
          image: "https://example.com/dien-tu.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Thời trang",
          image: "https://example.com/thoi-trang.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Nhà cửa & Đời sống",
          image: "https://example.com/nha-cua-doi-song.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Sức khỏe & Làm đẹp",
          image: "https://example.com/suc-khoe-lam-dep.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Thể thao & Dã ngoại",
          image: "https://example.com/the-thao-da-ngoai.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Ô tô & Xe máy",
          image: "https://example.com/oto-xe-may.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Sách",
          image: "https://example.com/sach.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Đồ chơi & Sở thích",
          image: "https://example.com/do-choi-so-thich.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Thực phẩm & Đồ uống",
          image: "https://example.com/thuc-pham-do-uong.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Nội thất",
          image: "https://example.com/noi-that.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        { name: "Điện thoại", image: "phone.jpg", created_at: new Date(), updated_at: new Date() },
        { name: "Laptop", image: "laptop.jpg", created_at: new Date(), updated_at: new Date() },
        {
          name: "Máy tính bảng",
          image: "tablet.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Phụ kiện",
          image: "accessories.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Đồng hồ thông minh",
          image: "smartwatch.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        { name: "TV", image: "tv.jpg", created_at: new Date(), updated_at: new Date() },
        { name: "Máy ảnh", image: "camera.jpg", created_at: new Date(), updated_at: new Date() },
        { name: "Loa", image: "speaker.jpg", created_at: new Date(), updated_at: new Date() },
        {
          name: "Máy chơi game",
          image: "console.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Thiết bị gia dụng",
          image: "home_appliance.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
