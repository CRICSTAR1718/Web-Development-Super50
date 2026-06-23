require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const authRouter = require('./api/auth.router');

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || true,
    credentials: true,
}));

// ensure json + cookies parsed
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.get('/health', (req, res) => {
    return res.status(200).json({ success: true, message: 'Server is running' });
});

app.use('/auth', authRouter);

const PORT = process.env.PORT || 6101;
app.listen(PORT, () => {
    console.log(`AuthBackend listening on port ${PORT}`);
});

