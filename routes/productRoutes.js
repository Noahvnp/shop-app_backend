import express from "express";
import * as productControllers from "../controllers/productControllers";

const router = express.Router();

router.get("/", productControllers.getProducts);
router.get("/:id", productControllers.getProductById);
router.post("/", productControllers.createProduct);
router.put("/:id", productControllers.updateProduct);
router.delete("/:id", productControllers.deleteProduct);

export default router;
