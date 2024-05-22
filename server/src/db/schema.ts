import { int, text, mysqlTable } from "drizzle-orm/mysql-core";

export const userTable = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  name: text("name"),
});
