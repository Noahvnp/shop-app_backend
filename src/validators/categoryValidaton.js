import Joi from "joi";

export const categorySchema = Joi.object({
  name: Joi.string().trim().min(3).max(50).required().messages({
    "string.base": "Tên danh mục phải là chuỗi.",
    "string.empty": "Tên danh mục không được để trống.",
    "string.min": "Tên danh mục phải có ít nhất 3 ký tự.",
    "string.max": "Tên danh mục không được dài quá 50 ký tự.",
    "any.required": "Tên danh mục là bắt buộc.",
  }),
  image: Joi.string().uri().optional().messages({
    // "string.uri": "Hình ảnh phải là một đường dẫn hợp lệ.",
  }),
});
