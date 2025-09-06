import { Router } from "express";
import { getBoards, dummy } from "../controllers/boardsController.js";

const router = Router();

router.get("/", getBoards);
router.get("/dummy", dummy);

export default router;