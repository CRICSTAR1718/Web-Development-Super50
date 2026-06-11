import { Router } from "express";
import * as productsController from "./products.controller";
import validate from "../../middlewares/validate.middleware";
import { createProductSchema } from "./dto/create-products.dto";
import { updateProductSchema } from "./dto/update-products.dto";

const router = Router();

// GET    /api/v1/products          → list all
router.get("/", productsController.getProducts);

// GET    /api/v1/products/:id      → get one
router.get("/:id", productsController.getProduct);

// POST   /api/v1/products          → create
router.post("/", validate(createProductSchema), productsController.createProduct);

// PUT    /api/v1/products/:id      → update
router.put("/:id", validate(updateProductSchema), productsController.updateProduct);

// DELETE /api/v1/products/:id      → delete
router.delete("/:id", productsController.deleteProduct);

export default router;
