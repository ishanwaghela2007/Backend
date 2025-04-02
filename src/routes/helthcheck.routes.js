import helthcheck from "../controllers/helthcheck.controllers.js";
import { Router } from "express";

const router=Router()

//routes
router.get("/check",helthcheck)

export default router