"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const isDev = process.env.NODE_ENV !== 'production';
function getEnv(key, fallback) {
    const value = process.env[key];
    if (!value) {
        if (!isDev && fallback === undefined) {
            throw new Error(`Missing critical environment variable in production: ${key}`);
        }
        return fallback || '';
    }
    return value;
}
exports.config = {
    port: parseInt(process.env.PORT || '5000', 10),
    nodeEnv: process.env.NODE_ENV || 'development',
    isDev,
    db: {
        url: getEnv('DATABASE_URL'),
    },
    jwt: {
        accessSecret: getEnv('JWT_ACCESS_SECRET', isDev ? 'fallback_access_secret' : undefined),
        refreshSecret: getEnv('JWT_REFRESH_SECRET', isDev ? 'fallback_refresh_secret' : undefined),
        accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN || '15m',
        refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
    },
    session: {
        secret: getEnv('SESSION_SECRET', isDev ? 'fallback_session_secret' : undefined),
    },
    email: {
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
        from: process.env.EMAIL_FROM || 'Inspire Leap <noreply@inspireleap.com>',
        adminEmail: process.env.ADMIN_EMAIL || 'admin@inspireleap.com',
    },
    razorpay: {
        keyId: process.env.RAZORPAY_KEY_ID || '',
        keySecret: process.env.RAZORPAY_KEY_SECRET || '',
    },
    frontend: {
        url: process.env.FRONTEND_URL || 'http://localhost:3000',
    },
    rateLimit: {
        windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10),
        max: parseInt(process.env.RATE_LIMIT_MAX || '100', 10),
    },
};
//# sourceMappingURL=config.js.map