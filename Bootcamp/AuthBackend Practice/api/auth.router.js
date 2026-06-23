const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { db } = require('../config/database/db-Config');
const { users } = require('../drizzle/schema');

const router = express.Router();

require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

function signToken(payload) {
    if (!JWT_SECRET) throw new Error('Missing JWT_SECRET in environment (.env)');
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

// POST /auth/register
router.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body || {};

        if (!email || !username || !password) {
            return res.status(400).json({ success: false, message: 'email, username, and password are required' });
        }

        if (password.length < 6) {
            return res.status(400).json({ success: false, message: 'password must be at least 6 characters' });
        }

        const { or, eq } = require('drizzle-orm');

        const existing = await db
            .select()
            .from(users)
            .where(or(eq(users.email, email), eq(users.username, username)));

        if (existing && existing.length > 0) {
            return res.status(409).json({ success: false, message: 'email or username already exists' });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const [created] = await db
            .insert(users)
            .values({
                email,
                username,
                passwordHash,
                isActive: true,
            })
            .returning();

        return res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user: { id: created.id, email: created.email, username: created.username },
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
});

// POST /auth/login
router.post('/login', async (req, res) => {
    try {
        const { emailOrUsername, password } = req.body || {};

        if (!emailOrUsername || !password) {
            return res.status(400).json({ success: false, message: 'emailOrUsername and password are required' });
        }

        const { or, eq } = require('drizzle-orm');

        const rows = await db
            .select()
            .from(users)
            .where(or(eq(users.email, emailOrUsername), eq(users.username, emailOrUsername)));

        const user = rows && rows[0];

        if (!user || !user.isActive) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const ok = await bcrypt.compare(password, user.passwordHash);

        if (!ok) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const token = signToken({ sub: user.id, email: user.email });

        // Store JWT in httpOnly cookie
        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
        });

        return res.status(200).json({
            success: true,
            message: 'Login successful',
            user: { id: user.id, email: user.email, username: user.username },
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
});

// POST /auth/logout
router.post('/logout', (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
        });

        return res.status(200).json({ success: true, message: 'Logged out' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;

