// Load environment variables FIRST — before any other imports
import dotenv from "dotenv";
dotenv.config();

import { env } from "./config/env.config";
import { connectDatabase } from "./config/db.config";
import createApp from "./app";
import logger from "./loggers/logger";

const startServer = async (): Promise<void> => {
  try {
    // ─── Database Connection ───────────────────────────────────────────────
    logger.info("Connecting to database...");
    connectDatabase(env.DATABASE_URL);
    logger.info("Database connected successfully");

    // ─── Create Express App ────────────────────────────────────────────────
    const app = createApp();

    // ─── Start HTTP Server ─────────────────────────────────────────────────
    const server = app.listen(env.PORT, () => {
      logger.info(`Server running on port ${env.PORT}`, {
        port: env.PORT,
        nodeEnv: env.NODE_ENV,
      });
    });

    // ─── Graceful Shutdown ─────────────────────────────────────────────────
    const shutdown = (signal: string) => {
      logger.info(`Received ${signal}. Shutting down gracefully...`);
      server.close(() => {
        logger.info("HTTP server closed");
        process.exit(0);
      });
    };

    process.on("SIGTERM", () => shutdown("SIGTERM"));
    process.on("SIGINT", () => shutdown("SIGINT"));
  } catch (error) {
    logger.error("Failed to start server", { error });
    process.exit(1);
  }
};

startServer();
