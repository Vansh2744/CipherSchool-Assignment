import { Router } from "express";
import { findAllAssignments, findAssignmentById } from "../controllers/assigment.controllers.js";

const router = Router()

router.get("/", findAllAssignments)
router.get("/:id", findAssignmentById)

export default router
