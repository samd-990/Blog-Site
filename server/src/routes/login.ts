import express from "express";

const router = express.Router();

router.get("/login", (_req, res) => {
  res.json({
    message: "Hello from login route!",
  });
});

export default router;
