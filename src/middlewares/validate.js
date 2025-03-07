import { errorResponse } from "./apiResponse";

export const validate = (schema, type = "body") => {
  return (req, res, next) => {
    const { error } = schema.validate(req[type], { abortEarly: false });

    if (error) {
      return errorResponse(
        res,
        400,
        "Dữ liệu không hợp lệ",
        "VALIDATION_ERROR",
        error.details.map(err => ({
          field: err.path[0],
          message: err.message,
        })),
      );
    }

    next();
  };
};
