import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";
import { ValidationError } from "../utils/errors";
import logger from "../loggers/logger";

type ValidationTarget = "body" | "params" | "query";

/**
 * Factory that returns an Express middleware which validates the specified
 * part of the request (body by default) against the given Zod schema.
 * Throws a ValidationError (422) if validation fails.
 */
const validate =
  (schema: ZodSchema, target: ValidationTarget = "body") =>
  (req: Request, _res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req[target]);

    if (!result.success) {
      const zodError = result.error as ZodError;
      const formattedErrors = zodError.errors.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      }));

      logger.warn("Zod validation failed", {
        target,
        path: req.path,
        errors: formattedErrors,
      });

      throw new ValidationError("Validation error", formattedErrors);
    }

    // Attach parsed & typed data back to request
    req[target] = result.data;
    next();
  };

export default validate;
