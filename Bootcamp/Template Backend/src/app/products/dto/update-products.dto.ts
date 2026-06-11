import { z } from "zod";

export const updateProductSchema = z
  .object({
    name: z.string().min(1, "Name cannot be empty").max(255).optional(),
    description: z.string().max(1000).optional().nullable(),
    price: z.number().positive("Price must be a positive number").optional(),
    stock: z
      .number()
      .int("Stock must be an integer")
      .nonnegative("Stock cannot be negative")
      .optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided for update",
  });

export type UpdateProductDto = z.infer<typeof updateProductSchema>;
