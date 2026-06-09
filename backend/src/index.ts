import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { config } from './config/config';
import { initializeDatabase } from './config/database';
import paymentRoutes from './routes/payment.routes';
import enrollmentRoutes from './routes/enrollment.routes';
import oauthRoutes from './routes/auth.oauth.routes';
import adminRoutes from './routes/admin.routes';
import session from 'express-session';
import passport from './config/passport';

const app = express();

// Security middleware
app.use(helmet());

// CORS
app.use(cors({
  origin: config.frontend.url,
  credentials: true,
}));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session for passport
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Logging
if (config.isDev) {
  app.use(morgan('dev'));
}

// Rate limiting
const limiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.max,
  message: 'Too many requests from this IP, please try again later.',
});
app.use('/api/', limiter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Inspire Leap Backend API' });
});

// API routes
app.use('/api/payment', paymentRoutes);
app.use('/api/enrollment', enrollmentRoutes);
app.use('/api/auth', oauthRoutes);
app.use('/api/admin', adminRoutes);

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
    ...(config.isDev && { stack: err.stack }),
  });
});

// Start server
const startServer = async () => {
  try {
    await initializeDatabase();
    
    app.listen(config.port, () => {
      console.log(`🚀 Server running on port ${config.port}`);
      console.log(`📧 Environment: ${config.nodeEnv}`);
      console.log(`🌐 Frontend URL: ${config.frontend.url}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
