import { PrismaClient } from '@prisma/client';

// Define a type for our global object to satisfy TypeScript
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Singleton pattern to prevent multiple instances of Prisma Client in development
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  });

if (import.meta.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

/**
 * Ensures the database connection is active.
 * Useful for validating access to product specs like ROXD50-2511[cite: 61].
 */
export const ensureConnection = async () => {
  try {
    await prisma.$connect();
    // Simple query to verify the connection is alive
    await prisma.$queryRaw`SELECT 1`;
    console.log('✅ Prisma connected to Supabase');
    return true;
  } catch (error) {
    console.error('❌ Prisma connection error:', error);
    return false;
  }
};

export default prisma;