import Joi from "joi";

export const idSchema = Joi.object({
  id: Joi.number().integer().positive().required().messages({
    "number.base": "ID phải là một số.",
    "number.integer": "ID phải là số nguyên.",
    "number.positive": "ID phải lớn hơn 0.",
    "any.required": "ID là bắt buộc.",
  }),
});
