import { Router } from "express";
import { executeQuery } from "../controllers/execute.controllers.js";

const router = Router()

router.post("/", executeQuery)

export default router