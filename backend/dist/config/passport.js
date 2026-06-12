"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const passport_github2_1 = require("passport-github2");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID || 'your_google_client_id',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'your_google_client_secret',
    callbackURL: `${process.env.OAUTH_CALLBACK_URL || 'http://localhost:5000/api/auth'}/google/callback`,
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const email = profile.emails?.[0]?.value || '';
        let user = await prisma.user.findFirst({
            where: {
                OR: [
                    { providerId: profile.id, authProvider: 'google' },
                    { email: email }
                ]
            }
        });
        if (user) {
            if (!user.providerId) {
                user = await prisma.user.update({
                    where: { id: user.id },
                    data: {
                        providerId: profile.id,
                        authProvider: 'google',
                        isEmailVerified: true
                    }
                });
            }
            return done(null, user);
        }
        user = await prisma.user.create({
            data: {
                email: email,
                firstName: profile.name?.givenName || profile.displayName || 'User',
                lastName: profile.name?.familyName || '',
                authProvider: 'google',
                providerId: profile.id,
                isEmailVerified: true,
                avatar: profile.photos?.[0]?.value || null,
            }
        });
        return done(null, user);
    }
    catch (error) {
        return done(error, undefined);
    }
}));
passport_1.default.use(new passport_github2_1.Strategy({
    clientID: process.env.GITHUB_CLIENT_ID || 'your_github_client_id',
    clientSecret: process.env.GITHUB_CLIENT_SECRET || 'your_github_client_secret',
    callbackURL: `${process.env.OAUTH_CALLBACK_URL || 'http://localhost:5000/api/auth'}/github/callback`,
    scope: ['user:email'],
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const email = profile.emails?.[0]?.value || `${profile.username}@github.com`;
        let user = await prisma.user.findFirst({
            where: {
                OR: [
                    { providerId: profile.id, authProvider: 'github' },
                    { email: email }
                ]
            }
        });
        if (user) {
            if (!user.providerId) {
                user = await prisma.user.update({
                    where: { id: user.id },
                    data: {
                        providerId: profile.id,
                        authProvider: 'github',
                        isEmailVerified: true
                    }
                });
            }
            return done(null, user);
        }
        user = await prisma.user.create({
            data: {
                email: email,
                firstName: profile.displayName || profile.username || 'User',
                lastName: '',
                authProvider: 'github',
                providerId: profile.id,
                isEmailVerified: true,
                avatar: profile.photos?.[0]?.value || null,
            }
        });
        return done(null, user);
    }
    catch (error) {
        return done(error, undefined);
    }
}));
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
passport_1.default.deserializeUser(async (id, done) => {
    try {
        const user = await prisma.user.findUnique({ where: { id } });
        done(null, user);
    }
    catch (error) {
        done(error, null);
    }
});
exports.default = passport_1.default;
//# sourceMappingURL=passport.js.map