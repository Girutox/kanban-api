import { Router } from "express";
import { getAllBoardsHandler, saveBoardHandler, dummy } from "../controllers/boardController.js";

const router = Router();

router.get("/", getAllBoardsHandler);
router.post("/save", saveBoardHandler);

export default router;