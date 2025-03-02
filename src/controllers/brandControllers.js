export const getBrands = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ message: "Lấy danh sách thương hiệu thành công" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Lỗi khi lấy danh sách thương hiệu: " + error });
  }
};

export const getBrandById = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ message: "Lấy thông tin thương hiệu thành công" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Lỗi khi lấy thông tin thương hiệu: " + error });
  }
};

export const createBrand = async (req, res) => {
  try {
    return res.status(201).json({ message: "Tạo thương hiệu thành công" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Lỗi khi tạo thương hiệu: " + error });
  }
};

export const updateBrand = async (req, res) => {
  try {
    return res.status(200).json({ message: "Cập nhật thương hiệu thành công" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Lỗi khi cập nhật thương hiệu: " + error });
  }
};

export const deleteBrand = async (req, res) => {
  try {
    return res.status(200).json({ message: "Xóa thương hiệu thành công" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Lỗi khi xóa thương hiệu: " + error });
  }
};
