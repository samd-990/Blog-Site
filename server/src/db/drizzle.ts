import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2";
import * as schema from "./schema";

export const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST ?? "",
  user: process.env.DATABASE_USER ?? "",
  database: process.env.DATABASE_NAME ?? "",
  password: process.env.DATABASE_PASSWORD ?? "",
});

export const db = drizzle(connection, { schema, mode: "default" });
