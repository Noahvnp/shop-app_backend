import { Op } from "sequelize";
import { errorResponse, successResponse } from "../middlewares/apiResponse.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import db from "../models/index.js";

export const getProducts = asyncHandler(async (req, res) => {
  const {
    search = "",
    page = 1,
    limit = 5,
    category_id,
    brand_id,
    min_price,
    max_price,
    sort_by,
    order_type = "DESC",
  } = req.query;

  // Đảm bảo limit hợp lệ
  const pageSize = Math.max(Number(limit) || 5, 1);

  // Đảm bảo page hợp lệ
  let pageNumber = Math.max(Number(page) || 1, 1);

  let searchFilter = {
    ...(search.trim() && {
      [Op.or]: ["name", "description", "specification"].map(field => ({
        [field]: { [Op.like]: `%${search}%` },
      })),
    }),
    ...(category_id && { category_id: { [Op.eq]: category_id } }),
    ...(brand_id && { brand_id: { [Op.eq]: brand_id } }),
  };

  // Lọc theo giá
  if (min_price && max_price && !isNaN(min_price) && !isNaN(max_price)) {
    searchFilter.price = { [Op.between]: [Number(min_price), Number(max_price)] };
  } else if (min_price && !isNaN(min_price)) {
    searchFilter.price = { [Op.gte]: Number(min_price) };
  } else if (max_price && !isNaN(max_price)) {
    searchFilter.price = { [Op.lte]: Number(max_price) };
  }

  const totalProducts = await db.Product.count({ where: searchFilter });

  const totalPages = Math.max(Math.ceil(totalProducts / pageSize), 1);

  // Nếu page lớn hơn totalPages, reset page về totalPages
  pageNumber = Math.min(pageNumber, totalPages);

  const offset = (pageNumber - 1) * pageSize;

  let order = [["createdAt", "DESC"]];
  if (sort_by) {
    order = [[sort_by, order_type.toUpperCase() === "ASC" ? "ASC" : "DESC"]];
  }

  const products = await db.Product.findAll({
    where: searchFilter,
    offset,
    limit: pageSize,
    order,
  });

  return successResponse(res, "Lấy danh sách sản phẩm thành công", {
    products,
    currentPage: pageNumber,
    totalPages,
    total: totalProducts,
  });
});

const findProductById = async (id, res) => {
  const product = await db.Product.findByPk(id);
  if (!product) {
    return errorResponse(res, 404, "Không tìm thấy sản phẩm với ID này", "PRODUCT_NOT_FOUND", {
      id,
    });
  }
  return product;
};

export const getProductById = asyncHandler(async (req, res) => {
  const product = await findProductById(req.params.id, res);
  if (!product) return;
  return successResponse(res, "Lấy thông tin sản phẩm thành công", { product });
});

export const createProduct = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const existingProduct = await db.Product.findOne({ where: { name } });
  if (existingProduct) {
    return errorResponse(res, 400, "Tên sản phẩm đã tồn tại", "PRODUCT_NAME_EXISTS", { name });
  }

  const product = await db.Product.create(req.body);
  return successResponse(res, "Tạo sản phẩm thành công", { product }, 201);
});

export const updateProduct = asyncHandler(async (req, res) => {
  const product = await findProductById(req.params.id, res);
  if (!product) return;

  const { name } = req.body;
  const existingProduct = await db.Product.findOne({ where: { name } });
  if (existingProduct) {
    return errorResponse(res, 400, "Tên sản phẩm đã tồn tại", "PRODUCT_NAME_EXISTS", { name });
  }

  await product.update(req.body);
  return successResponse(res, "Cập nhật thông tin sản phẩm thành công", { product });
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await findProductById(req.params.id, res);
  if (!product) return;

  await product.destroy();
  return successResponse(res, "Xóa sản phẩm thành công", { id: req.params.id });
});
