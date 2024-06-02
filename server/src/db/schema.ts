import { int, text, mysqlTable } from "drizzle-orm/mysql-core";

export const userTable = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  name: text("name"),
});

export const blogTable = mysqlTable("blogs", {
  id: int("id").primaryKey().autoincrement(),
  title: text("title"),
  content: text("content"),
  author: text("author"),
});
