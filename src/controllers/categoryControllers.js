import { errorResponse, successResponse } from "../middlewares/apiResponse.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import db from "../models/index.js";

export const getCategories = asyncHandler(async (req, res) => {
  const categories = await db.Category.findAll();
  return successResponse(res, "Lấy danh sách danh mục thành công", categories);
});

export const getCategoryById = asyncHandler(async (req, res) => {
  const id = req?.params?.id;
  const category = await db.Category.findByPk(id);

  if (!category)
    return errorResponse(res, 404, "Không tìm thấy danh mục với ID này", "CATEGORY_NOT_FOUND", {
      id,
    });

  return successResponse(res, "Lấy thông tin danh mục thành công", category);
});

export const createCategory = asyncHandler(async (req, res) => {
  const newCategory = await db.Category.create(req.body);
  return successResponse(res, "Thêm danh mục mới thành công", newCategory, 201);
});

export const updateCategory = asyncHandler(async (req, res) => {
  const id = req?.params?.id;
  const category = await db.Category.findByPk(id);
  if (!category)
    return errorResponse(res, 404, "Không tìm thấy danh mục với ID này", "CATEGORY_NOT_FOUND", {
      id,
    });

  await category.update(req.body);

  const updatedCategory = await db.Category.findByPk(id);

  return successResponse(res, "Cập nhật thông tin danh mục thành công", updatedCategory);
});

export const deleteCategory = asyncHandler(async (req, res) => {
  const id = req?.params?.id;
  const category = await db.Category.findByPk(id);
  if (!category)
    return errorResponse(res, 404, "Không tìm thấy danh mục với ID này", "CATEGORY_NOT_FOUND", {
      id,
    });

  await category.destroy();

  return successResponse(res, "Xóa danh mục thành công", { id });
});
