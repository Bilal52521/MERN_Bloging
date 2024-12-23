import express from "express";
import { sign_up } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sign_up" , sign_up);

export default router;
