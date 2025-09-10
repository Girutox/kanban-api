import { Router } from "express";
import { getAllBoardsHandler, saveBoardHandler, dummy } from "../controllers/boardController.js";

const router = Router();

router.get("/", getAllBoardsHandler);
router.post("/save", saveBoardHandler);

router.get("/dummy", dummy);

export default router;