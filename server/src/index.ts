import dotenv from "dotenv";
import loginRoutes from "./routes/login";
import logoutRoutes from "./routes/logout";
dotenv.config();

import express from "express";

const app = express();

app.use(loginRoutes);
app.use(logoutRoutes);

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
  console.log("Listening on PORT: " + PORT);
});
