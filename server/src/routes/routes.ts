import loginRoutes from "./login";
import logoutRoutes from "./logout";
import blogRoutes from "./blog";
import type { Express } from "express";

export function setupRoutes(app: Express) {
  app.use(loginRoutes);
  app.use(logoutRoutes);
  app.use("/blog", blogRoutes);
}
