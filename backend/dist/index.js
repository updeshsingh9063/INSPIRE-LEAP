"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const config_1 = require("./config/config");
const database_1 = require("./config/database");
const payment_routes_1 = __importDefault(require("./routes/payment.routes"));
const enrollment_routes_1 = __importDefault(require("./routes/enrollment.routes"));
const auth_oauth_routes_1 = __importDefault(require("./routes/auth.oauth.routes"));
const admin_routes_1 = __importDefault(require("./routes/admin.routes"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("./config/passport"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
const allowedOrigins = (process.env.FRONTEND_URL || 'http://localhost:3000')
    .split(',')
    .map(url => url.trim());
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error(`CORS: origin ${origin} not allowed`));
    },
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
if (!config_1.config.isDev) {
    app.set('trust proxy', 1);
}
app.use((0, express_session_1.default)({
    secret: config_1.config.session.secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: !config_1.config.isDev,
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000
    }
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
if (config_1.config.isDev) {
    app.use((0, morgan_1.default)('dev'));
}
const limiter = (0, express_rate_limit_1.default)({
    windowMs: config_1.config.rateLimit.windowMs,
    max: config_1.config.rateLimit.max,
    message: 'Too many requests from this IP, please try again later.',
});
app.use('/api/', limiter);
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Inspire Leap Backend API' });
});
app.use('/api/payment', payment_routes_1.default);
app.use('/api/enrollment', enrollment_routes_1.default);
app.use('/api/auth', auth_oauth_routes_1.default);
app.use('/api/admin', admin_routes_1.default);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal server error',
        ...(config_1.config.isDev && { stack: err.stack }),
    });
});
const startServer = async () => {
    try {
        await (0, database_1.initializeDatabase)();
        app.listen(config_1.config.port, () => {
            console.log(`🚀 Server running on port ${config_1.config.port}`);
            console.log(`📧 Environment: ${config_1.config.nodeEnv}`);
            console.log(`🌐 Frontend URL: ${config_1.config.frontend.url}`);
        });
    }
    catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=index.js.map