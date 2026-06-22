import { Request, Response, NextFunction } from "express";
import { AppError, ValidationError } from "../utils/errors";
import { APIErrorResponse } from "../utils/api-response";
import { HTTP_STATUS, MESSAGES } from "../constants";
import logger from "../loggers/logger";

/**
 * Global Express error-handling middleware.
 * Must be registered LAST in app.ts after all routes.
 */
const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
): void => {
  // Log the error
  logger.error("Unhandled error caught by error middleware", {
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
  });

  // Handle our own operational errors
  if (err instanceof ValidationError) {
    res
      .status(err.statusCode)
      .json(new APIErrorResponse(err.message, err.errors));
    return;
  }

  if (err instanceof AppError) {
    res
      .status(err.statusCode)
      .json(new APIErrorResponse(err.message));
    return;
  }

  // Unhandled / unexpected errors — don't leak internals
  res
    .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
    .json(new APIErrorResponse(MESSAGES.INTERNAL_ERROR));
};

export default errorMiddleware;
