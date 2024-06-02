import { Router } from "express";
import { db } from "../db/drizzle";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const blogs = await db.query.blogTable.findMany();
    res.json({
      message: "GOODBYE",
      blogs,
    });
  } catch (error) {
    res.status(400).json({
      message: "GOODBYE FOREVER",
    });
  }
});

export default router;
