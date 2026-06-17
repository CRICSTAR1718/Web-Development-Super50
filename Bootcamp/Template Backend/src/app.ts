import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { env } from "./config/env.config";
import productsRouter from "./app/products/products.routes";
import errorMiddleware from "./middlewares/error.middleware";
import { APISuccessResponse } from "./utils/api-response";
import { HTTP_STATUS, MESSAGES } from "./constants";
import { NotFoundError } from "./utils/errors";

const createApp = (): express.Application => {
  const app = express();

  // ─── Global Middlewares ─────────────────────────────────────────────────
  app.use(
    cors({
      origin: env.CORS_ORIGIN,
      credentials: true,
    })
  );
  app.use(helmet());
  app.use(morgan("dev"));
  // app.use((_req: Request, res: Response, next: NextFunction) => {
  //   setTimeout(() => {
  //     next();
  //   }, 5000);
  // });
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  // ─── Health Check ───────────────────────────────────────────────────────
  app.get("/health", (_req: Request, res: Response) => {
    res
      .status(HTTP_STATUS.OK)
      .json(new APISuccessResponse(MESSAGES.HEALTH_OK, { uptime: process.uptime() }));
  });

  // ─── Routes ─────────────────────────────────────────────────────────────
  app.use("/api/v1/products", productsRouter);

  // ─── 404 Handler ────────────────────────────────────────────────────────
  app.use((_req: Request, _res: Response) => {
    throw new NotFoundError("Route not found");
  });

  // ─── Error Handling Middleware (must be last) ────────────────────────────
  app.use(errorMiddleware);

  return app;
};

export default createApp;
