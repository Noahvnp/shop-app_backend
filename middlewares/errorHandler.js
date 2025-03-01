export const errorHandler = (err, req, res, next) => {
  console.error(`[ERROR] ${err.status || 500} - ${err.message}`);

  res.status(err.status || 500).json({
    success: false,
    error: err.message || "Internal Server Error",
  });
};

export const notFoundHandler = (req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found`);
  error.status = 404;
  next(error);
};
