"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("../config/passport"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
const router = express_1.default.Router();
const generateTokenAndRedirect = (req, res) => {
    if (!req.user) {
        return res.redirect(`${process.env.FRONTEND_URL}/login?error=AuthenticationFailed`);
    }
    const token = jsonwebtoken_1.default.sign({ userId: req.user.id, role: req.user.role }, process.env.JWT_ACCESS_SECRET || 'secret', { expiresIn: (process.env.JWT_ACCESS_EXPIRES_IN || '15m') });
    const userData = Buffer.from(JSON.stringify({
        id: req.user.id,
        name: req.user.firstName + ' ' + req.user.lastName,
        email: req.user.email,
        avatar: req.user.avatar,
    })).toString('base64');
    res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}&user=${userData}`);
};
router.get('/google', passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport_1.default.authenticate('google', { failureRedirect: '/login' }), generateTokenAndRedirect);
router.get('/github', passport_1.default.authenticate('github', { scope: ['user:email'] }));
router.get('/github/callback', passport_1.default.authenticate('github', { failureRedirect: '/login' }), generateTokenAndRedirect);
router.post('/admin/login', express_1.default.json(), async (req, res) => {
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
            }
            else if (user.role !== "ADMIN") {
                user = await prisma.user.update({
                    where: { email },
                    data: { role: "ADMIN" }
                });
            }
            const token = jsonwebtoken_1.default.sign({ userId: user.id, role: user.role }, process.env.JWT_ACCESS_SECRET || 'secret', { expiresIn: '24h' });
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
    }
    catch (error) {
        console.error("Admin login error:", error);
        res.status(500).json({ success: false, message: error instanceof Error ? error.message : "Internal server error" });
    }
});
router.post('/register', express_1.default.json(), async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password, educationLevel } = req.body;
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already registered" });
        }
        const salt = await bcryptjs_1.default.genSalt(10);
        const passwordHash = await bcryptjs_1.default.hash(password, salt);
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
        const token = jsonwebtoken_1.default.sign({ userId: user.id, role: user.role }, process.env.JWT_ACCESS_SECRET || 'secret', { expiresIn: (process.env.JWT_ACCESS_EXPIRES_IN || '15m') });
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
    catch (error) {
        console.error("Registration error:", error);
        return res.status(500).json({ success: false, message: error instanceof Error ? error.message : "Internal server error" });
    }
});
router.post('/login', express_1.default.json(), async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }
        if (user.role === "ADMIN" && user.passwordHash) {
        }
        else if (!user.passwordHash) {
            if (user.role === "ADMIN") {
                return res.status(401).json({
                    success: false,
                    message: "Please use the Admin Access tab to login."
                });
            }
            return res.status(401).json({
                success: false,
                message: "Please use Google/GitHub sign-in for this account."
            });
        }
        let isMatch = false;
        if (user.passwordHash) {
            isMatch = await bcryptjs_1.default.compare(password, user.passwordHash);
        }
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id, role: user.role }, process.env.JWT_ACCESS_SECRET || 'secret', { expiresIn: (process.env.JWT_ACCESS_EXPIRES_IN || '15m') });
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
    catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ success: false, message: error instanceof Error ? error.message : "Internal server error" });
    }
});
exports.default = router;
//# sourceMappingURL=auth.oauth.routes.js.map