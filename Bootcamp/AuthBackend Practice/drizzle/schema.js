const { pgTable, serial, text, varchar, timestamp, boolean } = require('drizzle-orm/pg-core');

// Simple users table for username/email + hashed password
const users = pgTable('users', {
    id: serial('id').primaryKey(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    username: varchar('username', { length: 255 }).notNull().unique(),
    passwordHash: text('password_hash').notNull(),
    isActive: boolean('is_active').notNull().default(true),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});

module.exports = {
    users,
};

