import { Router } from "express";
import { loginBody } from "../zod-schema/loginBody";

const router = Router();

router.get("/login", (req, res) => {
  try {
    const requestBody = loginBody.safeParse(req.body);
    if (!requestBody.success) {
      throw { status: 400, message: requestBody.error.issues[0].message };
    }
    res.json({
      message: "Hello from login route!",
      data: requestBody.data,
    });
  } catch (err: any) {
    res.status(err.status ?? 400).json({
      message: err.message ?? "Something went wrong!",
    });
  }
});

export default router;
