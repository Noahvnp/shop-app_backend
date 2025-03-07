import Joi from "joi";

export const productSchema = Joi.object({
  name: Joi.string().min(3).max(255).required().messages({
    "string.base": "Tên sản phẩm phải là chuỗi.",
    "string.empty": "Tên sản phẩm không được để trống.",
    "string.min": "Tên sản phẩm phải có ít nhất {#limit} ký tự.",
    "string.max": "Tên sản phẩm không được vượt quá {#limit} ký tự.",
    "any.required": "Tên sản phẩm là bắt buộc.",
  }),
  price: Joi.number().integer().min(0).required().messages({
    "number.base": "Giá sản phẩm phải là số.",
    "number.min": "Giá sản phẩm không thể nhỏ hơn {#limit}.",
    "any.required": "Giá sản phẩm là bắt buộc.",
  }),
  oldprice: Joi.number().integer().min(0).optional().allow(null),
  image: Joi.string().uri().optional().allow(null),
  description: Joi.string().optional().allow(null),
  specification: Joi.string().optional().allow(null),
  buyturn: Joi.number().integer().min(0).optional(),
  quantity: Joi.number().integer().min(0).required().messages({
    "number.base": "Số lượng sản phẩm phải là số nguyên.",
    "number.min": "Số lượng sản phẩm không thể nhỏ hơn {#limit}.",
    "any.required": "Số lượng sản phẩm là bắt buộc.",
  }),
  brand_id: Joi.number().integer().required().messages({
    "number.base": "ID thương hiệu phải là số.",
    "any.required": "Thương hiệu là bắt buộc.",
  }),
  category_id: Joi.number().integer().required().messages({
    "number.base": "ID danh mục phải là số.",
    "any.required": "Danh mục là bắt buộc.",
  }),
});
