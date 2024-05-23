import { Router } from "express";

const router = Router();

router.get("/logout", (req, res) => {
  res.json({
    message: "GOODBYE",
  });
});

export default router;
