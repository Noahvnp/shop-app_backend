import express from "express";
import * as brandControllers from "../controllers/brandControllers.js";

const router = express.Router();

router.get("/", brandControllers.getBrands);
router.get("/:id", brandControllers.getBrandById);
router.post("/", brandControllers.createBrand);
router.put("/:id", brandControllers.updateBrand);
router.delete("/:id", brandControllers.deleteBrand);

export default router;
