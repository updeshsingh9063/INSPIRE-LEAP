import { PrismaClient } from '@prisma/client';
import { config } from './config';

const prisma = new PrismaClient({
  log: config.isDev ? ['query', 'info', 'warn', 'error'] : ['error'],
});

export const initializeDatabase = async () => {
  try {
    await prisma.$connect();
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.warn('⚠️ Database connection failed, continuing without database:', error);
    // Don't throw error, allow server to start without database for local testing
  }
};

export default prisma;
