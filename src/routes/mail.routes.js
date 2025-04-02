import express from "express";
import { sendPersonalizedEmail } from "../controllers/mail.controllers.js";

const router = express.Router();

router.post("/send-email", sendPersonalizedEmail);

export default router;