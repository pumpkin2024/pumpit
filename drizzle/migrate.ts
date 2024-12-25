import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const runMigration = async () => {
  const connection = postgres(process.env.DATABASE_URL!, { max: 1 });
  const db = drizzle(connection);

  console.log('Running migrations...');
  
  await migrate(db, { migrationsFolder: 'drizzle/migrations' });
  
  console.log('Migrations completed!');
  
  await connection.end();
  process.exit(0);
};

runMigration().catch((err) => {
  console.error('Migration failed!', err);
  process.exit(1);
}); 