// ─── API Success Response ─────────────────────────────────────────────────
export class APISuccessResponse<T = unknown> {
  public readonly success: true;
  public readonly message: string;
  public readonly data: T;

  constructor(message: string, data: T) {
    this.success = true;
    this.message = message;
    this.data = data;
  }
}

// ─── API Error Response ───────────────────────────────────────────────────
export class APIErrorResponse {
  public readonly success: false;
  public readonly message: string;
  public readonly errors?: unknown[];

  constructor(message: string, errors?: unknown[]) {
    this.success = false;
    this.message = message;
    if (errors && errors.length > 0) {
      this.errors = errors;
    }
  }
}
