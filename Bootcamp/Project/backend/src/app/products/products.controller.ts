import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import * as productsService from "./products.service";
import { APISuccessResponse } from "../../utils/api-response";
import { HTTP_STATUS, MESSAGES } from "../../constants";
import asyncHandler from "../../utils/async-handler";
import { CreateProductDto } from "./dto/create-products.dto";
import { UpdateProductDto } from "./dto/update-products.dto";
import logger from "../../loggers/logger";

// ─── GET /api/v1/products ─────────────────────────────────────────────────
export const getProducts = asyncHandler(async (_req: Request, res: Response) => {
  logger.info("[ProductsController] getProducts → entry");

  const data = await productsService.getAllProducts();

  logger.info("[ProductsController] getProducts → exit");
  res
    .status(HTTP_STATUS.OK)
    .json(new APISuccessResponse(MESSAGES.FETCHED_ALL, data));
});

// ─── GET /api/v1/products/:id ─────────────────────────────────────────────
export const getProduct = asyncHandler<ParamsDictionary>(
  async (req: Request<ParamsDictionary>, res: Response) => {
    const { id } = req.params;
    logger.info("[ProductsController] getProduct → entry", { id });

    const data = await productsService.getProductById(id);

    logger.info("[ProductsController] getProduct → exit", { id });
    res
      .status(HTTP_STATUS.OK)
      .json(new APISuccessResponse(MESSAGES.FETCHED, data));
  }
);

// ─── POST /api/v1/products ────────────────────────────────────────────────
export const createProduct = asyncHandler<ParamsDictionary, unknown, CreateProductDto>(
  async (req: Request<ParamsDictionary, unknown, CreateProductDto>, res: Response) => {
    logger.info("[ProductsController] createProduct → entry");

    const data = await productsService.createProduct({
      ...req.body,
      price: String(req.body.price),
    });

    logger.info("[ProductsController] createProduct → exit", { id: data.id });
    res
      .status(HTTP_STATUS.CREATED)
      .json(new APISuccessResponse(MESSAGES.CREATED, data));
  }
);

// ─── PUT /api/v1/products/:id ─────────────────────────────────────────────
export const updateProduct = asyncHandler<ParamsDictionary, unknown, UpdateProductDto>(
  async (req: Request<ParamsDictionary, unknown, UpdateProductDto>, res: Response) => {
    const { id } = req.params;
    logger.info("[ProductsController] updateProduct → entry", { id });

    const data = await productsService.updateProduct(id, req.body);

    logger.info("[ProductsController] updateProduct → exit", { id });
    res
      .status(HTTP_STATUS.OK)
      .json(new APISuccessResponse(MESSAGES.UPDATED, data));
  }
);

// ─── DELETE /api/v1/products/:id ──────────────────────────────────────────
export const deleteProduct = asyncHandler<ParamsDictionary>(
  async (req: Request<ParamsDictionary>, res: Response) => {
    const { id } = req.params;
    logger.info("[ProductsController] deleteProduct → entry", { id });

    await productsService.deleteProduct(id);

    logger.info("[ProductsController] deleteProduct → exit", { id });
    res
      .status(HTTP_STATUS.OK)
      .json(new APISuccessResponse(MESSAGES.DELETED, null));
  }
);
