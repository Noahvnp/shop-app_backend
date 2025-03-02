export const getCategories = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ message: "Lấy danh sách danh mục thành công" });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi khi lấy danh sách danh mục: " + error,
    });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ message: "Lấy thông tin danh mục thành công" });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi khi lấy thông tin danh mục: " + error,
    });
  }
};

export const createCategory = async (req, res) => {
  try {
    return res.status(200).json({ message: "Thêm mới danh mục thành công" });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi khi thêm mới danh mục: " + error,
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    return res.status(200).json({ message: "Cập nhật danh mục thành công" });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi khi cập nhật danh mục: " + error,
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    return res.status(200).json({ message: "Xóa danh mục thành công" });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi khi xóa danh mục: " + error,
    });
  }
};
