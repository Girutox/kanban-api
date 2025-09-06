import { Router } from "express";
import boardsRoutes from "./boards.js";

const router = Router();

router.use("/boards", boardsRoutes);

export default router;