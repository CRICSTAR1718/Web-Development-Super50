import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as productsSchema from "../app/products/products.schema";

let dbInstance: ReturnType<typeof drizzle> | null = null;
let client: ReturnType<typeof postgres> | null = null;

export const connectDatabase = (databaseUrl: string): ReturnType<typeof drizzle> => {
  client = postgres(databaseUrl, { max: 10 });
  dbInstance = drizzle(client, {
    schema: { ...productsSchema },
  });
  return dbInstance;
};

export const disconnectDatabase = async (): Promise<void> => {
  if (client) {
    await client.end();
    client = null;
    dbInstance = null;
  }
};

const db = new Proxy({} as ReturnType<typeof drizzle>, {
  get(_target, prop) {
    if (!dbInstance) {
      throw new Error("Database not connected. Call connectDatabase() first.");
    }
    return (dbInstance as unknown as Record<string | symbol, unknown>)[prop];
  },
});

export default db;
