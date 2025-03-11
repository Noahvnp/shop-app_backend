import { Op } from "sequelize";
import { errorResponse, successResponse } from "../middlewares/apiResponse.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import db from "../models/index.js";

export const getCategories = asyncHandler(async (req, res) => {
  const {
    search = "",
    page = 1,
    limit = 5,
    sort_by,
    order_type = "ASC",
    includeProducts,
  } = req.query;

  const pageSize = Math.max(Number(limit) || 5, 1);
  let pageNumber = Math.max(Number(page) || 1, 1);

  const searchFilter = {
    ...(search.trim() && { name: { [Op.like]: `%${search}%` } }),
  };

  const totalCategories = await db.Category.count({ where: searchFilter });
  const totalPages = Math.max(Math.ceil(totalCategories / pageSize), 1);
  pageNumber = Math.min(pageNumber, totalPages);

  const offset = (pageNumber - 1) * pageSize;
  const order = [[sort_by || "name", order_type.toUpperCase() === "DESC" ? "DESC" : "ASC"]];

  const categories = await db.Category.findAll({
    where: searchFilter,
    offset,
    limit: pageSize,
    order,
    include:
      includeProducts === "true"
        ? [{ model: db.Product, attributes: ["id", "name"], limit: 10 }]
        : [],
  });

  return successResponse(res, "Lấy danh sách danh mục thành công", {
    categories,
    currentPage: pageNumber,
    totalPages,
    total: totalCategories,
  });
});

const findCategoryById = async (id, res) => {
  const category = await db.Category.findByPk(id);
  if (!category) {
    return errorResponse(res, 404, "Không tìm thấy danh mục với ID này", "CATEGORY_NOT_FOUND", {
      id,
    });
  }
  return category;
};

export const getCategoryById = asyncHandler(async (req, res) => {
  const category = await findCategoryById(req.params.id, res);
  if (!category) return;
  return successResponse(res, "Lấy thông tin danh mục thành công", { category });
});

export const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const existingCategory = await db.Category.findOne({ where: { name } });
  if (existingCategory) {
    return errorResponse(res, 400, "Danh mục này đã tồn tại", "CATEGORY_ALREADY_EXISTS", {
      name,
    });
  }

  const category = await db.Category.create(req.body);
  return successResponse(res, "Thêm danh mục mới thành công", { category }, 201);
});

export const updateCategory = asyncHandler(async (req, res) => {
  const category = await findCategoryById(req.params.id, res);
  if (!category) return;

  const { name } = req.body;
  const existingCategory = await db.Category.findOne({ where: { name } });
  if (existingCategory) {
    return errorResponse(res, 400, "Danh mục này đã tồn tại", "CATEGORY_ALREADY_EXISTS", {
      name,
    });
  }

  await category.update(req.body);
  return successResponse(res, "Cập nhật thông tin danh mục thành công", { category });
});

export const deleteCategory = asyncHandler(async (req, res) => {
  const category = await findCategoryById(req.params.id, res);
  if (!category) return;

  await category.destroy();
  return successResponse(res, "Xóa danh mục thành công", { id: req.params.id });
});
