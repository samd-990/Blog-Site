import "dotenv/config";
import { migrate } from "drizzle-orm/mysql2/migrator";
import { db, connection } from "./src/db/drizzle";

// This will run migrations on the database, skipping the ones already applied
migrate(db, { migrationsFolder: "./drizzle" }).then(() => {
  connection.end();
});
