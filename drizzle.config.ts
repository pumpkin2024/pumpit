import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });

export default defineConfig({
  schema: './drizzle/schema.ts',
  out: './supabase/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    // DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres in your .env
    url: process.env.DATABASE_URL!,
  },
});
