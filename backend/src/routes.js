import { Router } from "express";
const router = Router();

router.get("/", (_, res) => res.json({ msg: "API online 😊" }));

export default router;
