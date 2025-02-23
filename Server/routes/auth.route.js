import express from "express";
import { googleAuth, sign_up, signin } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sign_up", sign_up);
router.post("/signin", signin);
router.post("/google", googleAuth);

export default router;
