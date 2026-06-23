require('dotenv').config();

const { drizzle } = require('drizzle-orm/node-postgres');
const { Pool } = require('pg');

// Uses PostgreSQL connection string
// Provide DATABASE_URL in your .env
const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
    throw new Error('Missing DATABASE_URL in environment (.env)');
}

const pool = new Pool({ connectionString: DATABASE_URL });

const db = drizzle(pool);

module.exports = {
    db,
};

