import { Router } from "express";

const router = Router();

router.get("/login", (_req, res) => {
  res.json({
    message: "Hello from login route!",
  });
});

export default router;
