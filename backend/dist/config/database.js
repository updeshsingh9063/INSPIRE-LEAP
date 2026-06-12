"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDatabase = void 0;
const client_1 = require("@prisma/client");
const config_1 = require("./config");
const prisma = new client_1.PrismaClient({
    log: config_1.config.isDev ? ['query', 'info', 'warn', 'error'] : ['error'],
});
const initializeDatabase = async () => {
    try {
        await prisma.$connect();
        console.log('✅ Database connected successfully');
    }
    catch (error) {
        console.warn('⚠️ Database connection failed, continuing without database:', error);
    }
};
exports.initializeDatabase = initializeDatabase;
exports.default = prisma;
//# sourceMappingURL=database.js.map