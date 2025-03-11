import express from "express";
import * as productControllers from "../controllers/productControllers.js";
import { validate } from "../middlewares/validate.js";
import { idSchema } from "../validators/commonValidation.js";
import { productSchema } from "../validators/productValidaton.js";

const router = express.Router();

router.get("/", productControllers.getProducts);
router.get("/:id", validate(idSchema, "params"), productControllers.getProductById);
router.post("/", validate(productSchema), productControllers.createProduct);
router.put(
  "/:id",
  validate(idSchema, "params"),
  validate(productSchema),
  productControllers.updateProduct,
);
router.delete("/:id", validate(idSchema, "params"), productControllers.deleteProduct);

export default router;
