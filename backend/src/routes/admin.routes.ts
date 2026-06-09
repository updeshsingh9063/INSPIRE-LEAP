import express from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const router = express.Router();
const prisma = new PrismaClient();

// ── Admin Auth Middleware ─────────────────────────────────────────────────────
const requireAdmin = async (req: any, res: any, next: any) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];
    const decoded: any = jwt.verify(token, process.env.JWT_ACCESS_SECRET || 'secret');
    
    const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
    if (!user || user.role !== 'ADMIN') {
      return res.status(403).json({ error: 'Admin access required' });
    }
    req.adminUser = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

// ── GET /api/admin/users ──────────────────────────────────────────────────────
router.get('/users', requireAdmin, async (req: any, res: any) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        role: true,
        isActive: true,
        isEmailVerified: true,
        authProvider: true,
        avatar: true,
        createdAt: true,
        _count: { select: { enrollments: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json({ success: true, data: users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// ── GET /api/admin/courses ────────────────────────────────────────────────────
router.get('/courses', requireAdmin, async (req: any, res: any) => {
  try {
    const courses = await prisma.course.findMany({
      select: {
        id: true,
        title: true,
        category: true,
        price: true,
        discountPrice: true,
        level: true,
        isPublished: true,
        isFeatured: true,
        enrollmentCount: true,
        rating: true,
        ratingCount: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json({ success: true, data: courses });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// ── GET /api/admin/enrollments ────────────────────────────────────────────────
router.get('/enrollments', requireAdmin, async (req: any, res: any) => {
  try {
    const enrollments = await prisma.enrollment.findMany({
      select: {
        id: true,
        enrolledAt: true,
        progress: true,
        user: { select: { firstName: true, lastName: true, email: true } },
        course: { select: { title: true, price: true } },
      },
      orderBy: { enrolledAt: 'desc' },
    });
    res.json({ success: true, data: enrollments });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch enrollments' });
  }
});

// ── GET /api/admin/stats ──────────────────────────────────────────────────────
router.get('/stats', requireAdmin, async (req: any, res: any) => {
  try {
    const [totalUsers, totalCourses, totalEnrollments] = await Promise.all([
      prisma.user.count(),
      prisma.course.count(),
      prisma.enrollment.count(),
    ]);
    res.json({ success: true, data: { totalUsers, totalCourses, totalEnrollments } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

export default router;
