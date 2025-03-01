import express from "express";
import * as orderControllers from "../controllers/orderControllers";

const router = express.Router();

router.get("/", orderControllers.getOrders);
router.get("/:id", orderControllers.getOrderById);
router.post("/", orderControllers.createOrder);
router.put("/:id", orderControllers.updateOrder);
router.delete("/:id", orderControllers.deleteOrder);

export default router;
