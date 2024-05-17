import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.listen(process.env.PORT ?? 3000, () => {
  console.log("Listening on PORT: " + (process.env.PORT ?? 3000));
});
