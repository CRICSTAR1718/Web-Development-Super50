import { Request } from "express";

// ─── Pagination ────────────────────────────────────────────────────────────
export interface PaginationQuery {
  page?: string;
  limit?: string;
}

// ─── Typed Request Extensions ──────────────────────────────────────────────
export type RequestWithPagination = Request<
  Record<string, string>,
  unknown,
  unknown,
  PaginationQuery
>;

// ─── ID Params ─────────────────────────────────────────────────────────────
export interface IdParam {
  id: string;
}
