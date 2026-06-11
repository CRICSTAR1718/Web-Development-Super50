import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Name is required").max(255, "Name must be at most 255 characters"),
  description: z.string().max(1000, "Description must be at most 1000 characters").optional(),
  price: z
    .number({ required_error: "Price is required" })
    .positive("Price must be a positive number"),
  stock: z
    .number()
    .int("Stock must be an integer")
    .nonnegative("Stock cannot be negative")
    .default(0),
});

export type CreateProductDto = z.infer<typeof createProductSchema>;
