import { HTTP_STATUS } from "../constants";

// ─── Base Application Error ────────────────────────────────────────────────
export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    // Maintains proper prototype chain for instanceof checks
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

// ─── 400 Bad Request ──────────────────────────────────────────────────────
export class BadRequestError extends AppError {
  constructor(message = "Bad Request") {
    super(message, HTTP_STATUS.BAD_REQUEST);
  }
}

// ─── 401 Unauthorized ─────────────────────────────────────────────────────
export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized") {
    super(message, HTTP_STATUS.UNAUTHORIZED);
  }
}

// ─── 403 Forbidden ────────────────────────────────────────────────────────
export class ForbiddenError extends AppError {
  constructor(message = "Forbidden") {
    super(message, HTTP_STATUS.FORBIDDEN);
  }
}

// ─── 404 Not Found ────────────────────────────────────────────────────────
export class NotFoundError extends AppError {
  constructor(message = "Resource not found") {
    super(message, HTTP_STATUS.NOT_FOUND);
  }
}

// ─── 409 Conflict ─────────────────────────────────────────────────────────
export class ConflictError extends AppError {
  constructor(message = "Resource already exists") {
    super(message, HTTP_STATUS.CONFLICT);
  }
}

// ─── 422 Validation Error ────────────────────────────────────────────────
export class ValidationError extends AppError {
  public readonly errors: unknown[];

  constructor(message = "Validation error", errors: unknown[] = []) {
    super(message, HTTP_STATUS.UNPROCESSABLE_ENTITY);
    this.errors = errors;
  }
}
