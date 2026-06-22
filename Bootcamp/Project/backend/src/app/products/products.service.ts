import { eq } from "drizzle-orm";
import db from "../../config/db.config";
import { products, type NewProduct } from "./products.schema";
import { NotFoundError } from "../../utils/errors";
import { UpdateProductDto } from "./dto/update-products.dto";
import logger from "../../loggers/logger";

// ─── Get All Products ─────────────────────────────────────────────────────
export const getAllProducts = async () => {
  logger.info("[ProductsService] getAllProducts → entry");

  const result = await db.select().from(products);

  logger.info("[ProductsService] getAllProducts → exit", { count: result.length });
  return result;
};

// ─── Get Product By ID ────────────────────────────────────────────────────
export const getProductById = async (id: string) => {
  logger.info("[ProductsService] getProductById → entry", { id });

  const result = await db.select().from(products).where(eq(products.id, id)).limit(1);

  if (!result.length) {
    logger.warn("[ProductsService] getProductById → product not found", { id });
    throw new NotFoundError(`Product with id '${id}' not found`);
  }

  logger.info("[ProductsService] getProductById → exit", { id });
  return result[0];
};

// ─── Create Product ───────────────────────────────────────────────────────
export const createProduct = async (data: NewProduct) => {
  logger.info("[ProductsService] createProduct → entry", { name: data.name });

  const result = await db.insert(products).values(data).returning();

  logger.info("[ProductsService] createProduct → exit", { id: result[0].id });
  return result[0];
};

// ─── Update Product ───────────────────────────────────────────────────────
export const updateProduct = async (id: string, data: UpdateProductDto) => {
  logger.info("[ProductsService] updateProduct → entry", { id });

  // Verify existence first
  await getProductById(id);

  const updateData: Record<string, unknown> = { ...data, updatedAt: new Date() };

  const result = await db
    .update(products)
    .set(updateData)
    .where(eq(products.id, id))
    .returning();

  logger.info("[ProductsService] updateProduct → exit", { id });
  return result[0];
};

// ─── Delete Product ───────────────────────────────────────────────────────
export const deleteProduct = async (id: string) => {
  logger.info("[ProductsService] deleteProduct → entry", { id });

  // Verify existence first
  await getProductById(id);

  await db.delete(products).where(eq(products.id, id));

  logger.info("[ProductsService] deleteProduct → exit", { id });
};
