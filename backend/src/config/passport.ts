import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github2';
import { PrismaClient } from '@prisma/client';
import { config } from './config';

const prisma = new PrismaClient();

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || 'your_google_client_id',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'your_google_client_secret',
      callbackURL: `${process.env.OAUTH_CALLBACK_URL || 'http://localhost:5000/api/auth'}/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value || '';
        
        // Find existing user by providerId or email
        let user = await prisma.user.findFirst({
          where: {
            OR: [
              { providerId: profile.id, authProvider: 'google' },
              { email: email }
            ]
          }
        });

        if (user) {
          // If user exists with same email but different provider, update them or just log them in
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

        // Create new user
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
      } catch (error) {
        return done(error as Error, undefined);
      }
    }
  )
);

// GitHub Strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID || 'your_github_client_id',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || 'your_github_client_secret',
      callbackURL: `${process.env.OAUTH_CALLBACK_URL || 'http://localhost:5000/api/auth'}/github/callback`,
      scope: ['user:email'],
    },
    async (accessToken: string, refreshToken: string, profile: any, done: any) => {
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

        // Create new user
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
      } catch (error) {
        return done(error as Error, undefined);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;
