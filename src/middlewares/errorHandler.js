import { errorResponse } from "./apiResponse.js";

export const errorHandler = (err, req, res, next) => {
  const isDev = process.env.NODE_ENV === "development";

  return errorResponse(
    res,
    err.status || 500,
    err.message || "Lỗi không xác định",
    err.code || "SERVER_ERROR",
    isDev ? err.stack : undefined,
  );
};

export const notFoundHandler = (req, res, next) => {
  return errorResponse(res, 404, `Không tìm thấy đường dẫn: ${req.originalUrl}`, "NOT_FOUND");
};
