import { successResponse, errorResponse } from "../middlewares/apiResponse.js";

export const getProducts = async (req, res) => {
  try {
    return successResponse(res, "Lấy danh sách sản phẩm thành công");
  } catch (error) {
    return errorResponse(res, 500, "Lỗi server", "INTERNAL_SERVER_ERROR");
  }
};

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
