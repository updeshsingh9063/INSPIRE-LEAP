"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
const router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
const requireAdmin = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader?.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'No token provided' });
        }
        const token = authHeader.split(' ')[1];
        const decoded = jsonwebtoken_1.default.verify(token, config_1.config.jwt.accessSecret);
        const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
        if (!user || user.role !== 'ADMIN') {
            return res.status(403).json({ error: 'Admin access required' });
        }
        req.adminUser = user;
        next();
    }
    catch (err) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
};
router.get('/users', requireAdmin, async (req, res) => {
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
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});
router.get('/courses', requireAdmin, async (req, res) => {
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
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
});
router.get('/enrollments', requireAdmin, async (req, res) => {
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
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch enrollments' });
    }
});
router.get('/stats', requireAdmin, async (req, res) => {
    try {
        const [totalUsers, totalCourses, totalEnrollments] = await Promise.all([
            prisma.user.count(),
            prisma.course.count(),
            prisma.enrollment.count(),
        ]);
        res.json({ success: true, data: { totalUsers, totalCourses, totalEnrollments } });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch stats' });
    }
});
exports.default = router;
//# sourceMappingURL=admin.routes.js.map