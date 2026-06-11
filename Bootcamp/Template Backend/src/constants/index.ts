// ─── HTTP Status Codes ─────────────────────────────────────────────────────
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// ─── Common Messages ───────────────────────────────────────────────────────
export const MESSAGES = {
  HEALTH_OK: "Server is up and running",
  NOT_FOUND: "Resource not found",
  INTERNAL_ERROR: "Internal server error",
  VALIDATION_ERROR: "Validation error",
  UNAUTHORIZED: "Unauthorized",
  FORBIDDEN: "Forbidden",
  CONFLICT: "Resource already exists",
  CREATED: "Resource created successfully",
  UPDATED: "Resource updated successfully",
  DELETED: "Resource deleted successfully",
  FETCHED: "Resource fetched successfully",
  FETCHED_ALL: "Resources fetched successfully",
} as const;
