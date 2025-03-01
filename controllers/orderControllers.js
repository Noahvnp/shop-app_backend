export const getOrders = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ message: "Lấy danh sách đơn hàng thành công" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Lỗi khi lấy danh sách đơn hàng: " + error });
  }
};

export const getOrderById = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ message: "Lấy thông tin đơn hàng thành công" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Lỗi khi lấy thông tin đơn hàng: " + error });
  }
};

export const createOrder = async (req, res) => {
  try {
    return res.status(201).json({ message: "Tạo đơn hàng thành công" });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi khi tạo đơn hàng: " + error });
  }
};

export const updateOrder = async (req, res) => {
  try {
    return res.status(200).json({ message: "Cập nhật đơn hàng thành công" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Lỗi khi cập nhật đơn hàng: " + error });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    return res.status(200).json({ message: "Xóa đơn hàng thành công" });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi khi xóa đơn hàng: " + error });
  }
};
