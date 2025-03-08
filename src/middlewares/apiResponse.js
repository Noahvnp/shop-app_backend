/**
 * @module middlewares/apiResponse
 * @description Middleware chứa các hàm để chuẩn hóa response trả về cho client
 */

/**
 * Trả về response thành công với dữ liệu
 *
 * @function successResponse
 * @param {object} res - Express response object
 * @param {string} message - Thông báo thành công
 * @param {object|array} [data={}] - Dữ liệu trả về cho client
 * @param {number} [statusCode=200] - Mã HTTP status code
 * @returns {object} Express response với định dạng JSON
 *
 * @example
 * // Trả về thành công với dữ liệu
 * successResponse(res, "Lấy danh sách thành công", products);
 *
 * // Trả về thành công với mã 201 (Created)
 * successResponse(res, "Tạo mới thành công", newItem, 201);
 */
export const successResponse = (res, message, data = {}, statusCode = 200) => {
  return res.status(statusCode).json({
    status: "success",
    message,
    data,
  });
};

/**
 * Trả về response lỗi với mã lỗi và chi tiết
 *
 * @function errorResponse
 * @param {object} res - Express response object
 * @param {number} statusCode - Mã HTTP status code (400, 401, 403, 404, 500, etc.)
 * @param {string} message - Thông báo lỗi
 * @param {string} errorCode - Mã lỗi dùng để xác định loại lỗi (ví dụ: INVALID_INPUT, NOT_FOUND)
 * @param {object|array} [details=[]] - Chi tiết lỗi, chỉ trả về trong môi trường development
 * @returns {object} Express response với định dạng JSON
 *
 * @example
 * // Lỗi không tìm thấy
 * errorResponse(res, 404, "Không tìm thấy sản phẩm", "PRODUCT_NOT_FOUND", { id });
 *
 * // Lỗi dữ liệu đầu vào
 * errorResponse(res, 400, "Dữ liệu không hợp lệ", "VALIDATION_ERROR", errors);
 *
 * // Lỗi server
 * errorResponse(res, 500, "Lỗi server", "SERVER_ERROR", error.stack);
 */
export const errorResponse = (res, statusCode, message, errorCode, details = []) => {
  const isDev = process.env.NODE_ENV === "development";
  const errMsg = isDev ? details : undefined;

  return res.status(statusCode).json({
    status: "error",
    message,
    errors: {
      code: errorCode,
      details: errMsg,
    },
  });
};
