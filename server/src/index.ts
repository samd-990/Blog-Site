import express from "express";
import { setupRoutes } from "./routes/routes";
require("dotenv").config();

const app = express();

app.use(express.json());
setupRoutes(app);

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
  console.log("Listening on PORT: " + PORT);
});
