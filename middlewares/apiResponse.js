export const successResponse = (res, message, data = {}) => {
  return res.status(200).json({
    status: "success",
    message,
    data,
  });
};

export const errorResponse = (res, statusCode, message, errorCode, details = []) => {
  return res.status(statusCode).json({
    status: "error",
    message,
    error: {
      code: errorCode,
      details,
    },
  });
};
