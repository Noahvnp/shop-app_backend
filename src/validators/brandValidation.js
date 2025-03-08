import Joi from "joi";

export const brandSchema = Joi.object({
  name: Joi.string().trim().min(3).max(50).required().messages({
    "string.base": "Tên thương hiệu phải là chuỗi.",
    "string.empty": "Tên thương hiệu không được để trống.",
    "string.min": "Tên thương hiệu phải có ít nhất 3 ký tự.",
    "string.max": "Tên thương hiệu không được dài quá 50 ký tự.",
    "any.required": "Tên thương hiệu là bắt buộc.",
  }),
  image: Joi.string().uri().optional().messages({
    // "string.uri": "Hình ảnh phải là một đường dẫn hợp lệ.",
  }),
});
