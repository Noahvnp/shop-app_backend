import express from "express";
import * as categoryControllers from "../controllers/categoryControllers";

const router = express.Router();

router.get("/", categoryControllers.getCategories);
router.get("/:id", categoryControllers.getCategoryById);
router.post("/", categoryControllers.createCategory);
router.put("/:id", categoryControllers.updateCategory);
router.delete("/:id", categoryControllers.deleteCategory);

export default router;
