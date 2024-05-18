import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { db } from "./db/drizzle";

const app = express();

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
  console.log("Listening on PORT: " + PORT);
  console.log(db);
});
