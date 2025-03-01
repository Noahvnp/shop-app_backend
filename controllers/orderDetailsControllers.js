export const getOrderDetails = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ message: "Lấy danh sách chi tiết đơn hàng thành công" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Lỗi khi lấy danh sách chi tiết đơn hàng: " + error });
  }
};

export const getOrderDetailsById = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ message: "Lấy thông tin chi tiết đơn hàng thành công" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Lỗi khi lấy thông tin chi tiết đơn hàng: " + error });
  }
};

export const createOrderDetails = async (req, res) => {
  try {
    return res
      .status(201)
      .json({ message: "Tạo chi tiết đơn hàng thành công" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Lỗi khi tạo chi tiết đơn hàng: " + error });
  }
};

export const updateOrderDetails = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ message: "Cập nhật chi tiết đơn hàng thành công" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Lỗi khi cập nhật chi tiết đơn hàng: " + error });
  }
};

export const deleteOrderDetails = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ message: "Xóa chi tiết đơn hàng thành công" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Lỗi khi xóa chi tiết đơn hàng: " + error });
  }
};
