import express from "express";
import * as categoryControllers from "../controllers/categoryControllers.js";
import { validate } from "../middlewares/validate.js";
import { categorySchema } from "../validators/categoryValidaton.js";
import { idSchema } from "../validators/commonValidation.js";

const router = express.Router();

router.get("/", categoryControllers.getCategories);
router.get("/:id", validate(idSchema, "params"), categoryControllers.getCategoryById);
router.post("/", validate(categorySchema), categoryControllers.createCategory);
router.put(
  "/:id",
  validate(idSchema, "params"),
  validate(categorySchema),
  categoryControllers.updateCategory,
);
router.delete("/:id", validate(idSchema, "params"), categoryControllers.deleteCategory);

export default router;
