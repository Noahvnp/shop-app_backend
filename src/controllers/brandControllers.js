import { Op } from "sequelize";
import { errorResponse, successResponse } from "../middlewares/apiResponse.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import db from "../models/index.js";

export const getBrands = asyncHandler(async (req, res) => {
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

  const totalBrands = await db.Brand.count({ where: searchFilter });
  const totalPages = Math.max(Math.ceil(totalBrands / pageSize), 1);

  // Nếu page lớn hơn totalPages, reset page về totalPages
  pageNumber = Math.min(pageNumber, totalPages);

  const offset = (pageNumber - 1) * pageSize;

  // Sắp xếp theo `sort_by` (mặc định theo name)
  const order = [[sort_by || "name", order_type.toUpperCase() === "DESC" ? "DESC" : "ASC"]];

  const brands = await db.Brand.findAll({
    where: searchFilter,
    offset,
    limit: pageSize,
    order,
    include:
      includeProducts === "true"
        ? [{ model: db.Product, attributes: ["id", "name"], limit: 10 }]
        : [],
  });

  return successResponse(res, "Lấy danh sách thương hiệu thành công", {
    brands,
    currentPage: pageNumber,
    totalPages,
    total: totalBrands,
  });
});

const findBrandById = async (id, res) => {
  const brand = await db.Brand.findByPk(id);
  if (!brand) {
    return errorResponse(res, 404, "Không tìm thấy thương hiệu với ID này", "BRAND_NOT_FOUND", {
      id,
    });
  }
  return brand;
};

export const getBrandById = asyncHandler(async (req, res) => {
  const brand = await findBrandById(req.params.id, res);
  if (!brand) return;
  return successResponse(res, "Lấy thông tin thương hiệu thành công", { brand });
});

export const createBrand = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const existingBrand = await db.Brand.findOne({ where: { name } });
  if (existingBrand) {
    return errorResponse(res, 400, "Thương hiệu đã tồn tại", "BRAND_ALREADY_EXISTS", { name });
  }

  const brand = await db.Brand.create(req.body);
  return successResponse(res, "Tạo thương hiệu thành công", { brand }, 201);
});

export const updateBrand = asyncHandler(async (req, res) => {
  const brand = await findBrandById(req.params.id, res);
  if (!brand) return;

  const { name } = req.body;
  const existingBrand = await db.Brand.findOne({ where: { name } });
  if (existingBrand) {
    return errorResponse(res, 400, "Thương hiệu đã tồn tại", "BRAND_ALREADY_EXISTS", { name });
  }

  await brand.update(req.body);
  return successResponse(res, "Cập nhật thông tin thương hiệu thành công", { brand });
});

export const deleteBrand = asyncHandler(async (req, res) => {
  const brand = await findBrandById(req.params.id, res);
  if (!brand) return;

  await brand.destroy();
  return successResponse(res, "Xóa thương hiệu thành công", { id: req.params.id });
});
