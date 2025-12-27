import { Router } from "express";
import { generateHint } from "../controllers/hint.controllers.js";

const router = Router()

router.post("/", generateHint)

export default router
