import { Router } from "express";
import { getAllBoardsHandler, getFullBoardHandler, saveBoardHandler } from "../controllers/boardController.js";

const router = Router();

router.get("/", getAllBoardsHandler);
router.get("/:id", getFullBoardHandler);
router.post("/save", saveBoardHandler);

export default router;