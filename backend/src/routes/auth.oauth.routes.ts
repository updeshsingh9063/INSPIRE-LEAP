import express from 'express';
import passport from '../config/passport';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const router = express.Router();

const generateTokenAndRedirect = (req: any, res: any) => {
  if (!req.user) {
    return res.redirect(`${process.env.FRONTEND_URL}/login?error=AuthenticationFailed`);
  }
  
  // Generate JWT access token
  const token = jwt.sign(
    { userId: req.user.id, role: req.user.role },
    process.env.JWT_ACCESS_SECRET || 'secret',
    { expiresIn: (process.env.JWT_ACCESS_EXPIRES_IN || '15m') as jwt.SignOptions['expiresIn'] }
  );

  // Convert user object to a base64 encoded JSON string to pass safely in URL
  const userData = Buffer.from(JSON.stringify({
    id: req.user.id,
    name: req.user.firstName + ' ' + req.user.lastName,
    email: req.user.email,
    avatar: req.user.avatar,
  })).toString('base64');

  // Redirect to frontend with token and user data
  res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}&user=${userData}`);
};

// Google Auth Routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  generateTokenAndRedirect
);

// GitHub Auth Routes
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

router.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  generateTokenAndRedirect
);

// Admin Local Login Route
router.post('/admin/login', express.json(), async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    
    if (email === "updeshsingh9063@gmail.com" && password === "Senu@9063") {
      let user = await prisma.user.findUnique({ where: { email } });
      
      if (!user) {
        user = await prisma.user.create({
          data: {
            email,
            firstName: "Admin",
            lastName: "User",
            role: "ADMIN",
            isEmailVerified: true
          }
        });
      } else if (user.role !== "ADMIN") {
        user = await prisma.user.update({
          where: { email },
          data: { role: "ADMIN" }
        });
      }
      
      const token = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_ACCESS_SECRET || 'secret',
        { expiresIn: '24h' }
      );
      
      return res.json({
        success: true,
        token,
        user: {
          id: user.id,
          name: user.firstName + ' ' + user.lastName,
          email: user.email,
          role: user.role
        }
      });
    }
    
    return res.status(401).json({ success: false, message: "Invalid admin credentials" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Standard User Registration Route
router.post('/register', express.json(), async (req: any, res: any) => {
  try {
    const { firstName, lastName, email, phone, password, educationLevel } = req.body;

    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already registered" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create user
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        passwordHash,
        educationLevel,
        role: "STUDENT",
        authProvider: "local",
      }
    });

    // Generate token
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_ACCESS_SECRET || 'secret',
      { expiresIn: process.env.JWT_ACCESS_EXPIRES_IN || '15m' }
    );

    return res.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.firstName + ' ' + user.lastName,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ success: false, message: "Failed to register user" });
  }
});

// Standard User Login Route
router.post('/login', express.json(), async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    // Allow admins to login here as well just in case
    if (user.role === "ADMIN" && user.passwordHash) {
      // Proceed to bcrypt check
    } else if (!user.passwordHash) {
      return res.status(401).json({ 
        success: false, 
        message: "Please use Google/GitHub sign-in for this account." 
      });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.passwordHash || "");
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_ACCESS_SECRET || 'secret',
      { expiresIn: process.env.JWT_ACCESS_EXPIRES_IN || '15m' }
    );

    return res.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.firstName + ' ' + user.lastName,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export default router;
