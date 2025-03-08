import { successResponse } from "../middlewares/apiResponse.js";
import asyncHandler from "../middlewares/asyncHandler.js";

export const getProducts = asyncHandler(async (req, res) => {
  return successResponse(res, "Lấy danh sách sản phẩm thành công");
});

export const getProductById = async (req, res) => {
  try {
    return res.status(200).json({ message: "Lấy thông tin sản phẩm thành công" });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi khi lấy thông tin sản phẩm: " + error,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    return res.status(200).json({ message: "Thêm mới sản phẩm thành công" });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi khi thêm mới sản phẩm: " + error,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    return res.status(200).json({ message: "Cập nhật sản phẩm thành công" });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi khi cập nhật sản phẩm: " + error,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    return res.status(200).json({ message: "Xóa sản phẩm thành công" });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi khi xóa sản phẩm: " + error,
    });
  }
};
