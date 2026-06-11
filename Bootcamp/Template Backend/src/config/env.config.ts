import dotenv from "dotenv";
import path from "path";

// Load .env from project root
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const getRequiredEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

const getOptionalEnv = (key: string, defaultValue: string): string => {
  return process.env[key] ?? defaultValue;
};

export const env = {
  PORT: parseInt(getOptionalEnv("PORT", "3000"), 10),
  NODE_ENV: getOptionalEnv("NODE_ENV", "development"),
  DATABASE_URL: getRequiredEnv("DATABASE_URL"),
  CORS_ORIGIN: getOptionalEnv("CORS_ORIGIN", "*"),
} as const;
