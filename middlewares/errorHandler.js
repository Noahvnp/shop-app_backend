import { errorResponse } from "./apiResponse.js";

export const errorHandler = (err, req, res, next) => {
  /* eslint-disable no-console */
  console.error(`[ERROR] ${err.status || 500} - ${err.message}`);

  return errorResponse(
    res,
    err.status || 500,
    err.message || "Lỗi không xác định",
    err.code || "SERVER_ERROR",
  );
};

export const notFoundHandler = (req, res, next) => {
  return errorResponse(res, 404, `Không tìm thấy đường dẫn: ${req.originalUrl}`, "NOT_FOUND");
};
