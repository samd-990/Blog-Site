import dotenv from "dotenv";
import loginRoutes from "./routes/login";
dotenv.config();

import express from "express";

const app = express();

app.use(loginRoutes);

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
  console.log("Listening on PORT: " + PORT);
});
