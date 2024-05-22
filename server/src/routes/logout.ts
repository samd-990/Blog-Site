import { Router } from "express";

const router = Router()

router.get('/logout', (_req, res) => {
    res.json({
        message: "GOODBYE"
    });
});

export default router;