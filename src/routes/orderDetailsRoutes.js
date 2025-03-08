import express from "express";
import * as orderDetailControllers from "../controllers/orderDetailsControllers.js";

const router = express.Router();

router.get("/", orderDetailControllers.getOrderDetails);
router.get("/:id", orderDetailControllers.getOrderDetailsById);
router.post("/", orderDetailControllers.createOrderDetails);
router.put("/:id", orderDetailControllers.updateOrderDetails);
router.delete("/:id", orderDetailControllers.deleteOrderDetails);

export default router;
