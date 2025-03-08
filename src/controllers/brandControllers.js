import { errorResponse, successResponse } from "../middlewares/apiResponse.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import db from "../models/index.js";

export const getBrands = asyncHandler(async (req, res) => {
  const brands = await db.Brand.findAll();
  return successResponse(res, "Lấy danh sách thương hiệu thành công", brands);
});

export const getBrandById = asyncHandler(async (req, res) => {
  const id = req?.params?.id;
  const brand = await db.Brand.findByPk(id);

  if (!brand)
    return errorResponse(res, 404, "Không tìm thấy thương hiệu với ID này", "BRAND_NOT_FOUND", {
      id,
    });

  return successResponse(res, "Lấy thông tin thương hiệu thành công", brand);
});

export const createBrand = asyncHandler(async (req, res) => {
  const newBrand = await db.Brand.create(req.body);
  return successResponse(res, "Tạo thương hiệu thành công", newBrand, 201);
});

export const updateBrand = asyncHandler(async (req, res) => {
  const id = req?.params?.id;
  const brand = await db.Brand.findByPk(id);
  if (!brand)
    return errorResponse(res, 404, "Không tìm thấy thương hiệu với ID này", "BRAND_NOT_FOUND", {
      id,
    });

  await brand.update(req.body);

  const updatedBrand = await db.Brand.findByPk(id);

  return successResponse(res, "Cập nhật thông tin thương hiệu thành công", updatedBrand);
});

export const deleteBrand = asyncHandler(async (req, res) => {
  const id = req?.params?.id;
  const brand = await db.Brand.findByPk(id);
  if (!brand)
    return errorResponse(res, 404, "Không tìm thấy thương hiệu với ID này", "BRAND_NOT_FOUND", {
      id,
    });

  await brand.destroy();

  return successResponse(res, "Xóa thương hiệu thành công", { id });
});
