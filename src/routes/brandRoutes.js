import express from "express";
import * as brandControllers from "../controllers/brandControllers.js";
import { validate } from "../middlewares/validate.js";
import { brandSchema } from "../validators/brandValidation.js";
import { idSchema } from "../validators/commonValidation.js";

const router = express.Router();

router.get("/", brandControllers.getBrands);
router.get("/:id", validate(idSchema, "params"), brandControllers.getBrandById);
router.post("/", validate(brandSchema), brandControllers.createBrand);
router.put(
  "/:id",
  validate(idSchema, "params"),
  validate(brandSchema),
  brandControllers.updateBrand,
);
router.delete("/:id", validate(idSchema, "params"), brandControllers.deleteBrand);

export default router;
