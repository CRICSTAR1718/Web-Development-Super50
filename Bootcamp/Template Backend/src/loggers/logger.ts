import winston from "winston";

const { combine, timestamp, colorize, printf, errors, json } = winston.format;

// Custom log format for development (human-readable)
const devFormat = combine(
  colorize({ all: true }),
  timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  errors({ stack: true }),
  printf(({ level, message, timestamp, stack, ...meta }) => {
    let log = `[${timestamp}] ${level}: ${message}`;
    if (stack) log += `\n${stack}`;
    if (Object.keys(meta).length > 0) log += `\n${JSON.stringify(meta, null, 2)}`;
    return log;
  })
);

// JSON format for production / file logs
const prodFormat = combine(
  timestamp(),
  errors({ stack: true }),
  json()
);

const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console({
      format: process.env.NODE_ENV === "production" ? prodFormat : devFormat,
    }),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
      format: prodFormat,
    }),
    new winston.transports.File({
      filename: "logs/combined.log",
      format: prodFormat,
    }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: "logs/exceptions.log", format: prodFormat }),
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: "logs/rejections.log", format: prodFormat }),
  ],
});

export default logger;
