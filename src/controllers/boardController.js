import { getAllBoards, saveBoard } from "../models/boardModel.js";

export const getAllBoardsHandler = async (req, res) => {
  try {
    const boards = await getAllBoards();
    res.json(boards);
  } catch (err) {
    console.error("Error fetching boards:", err.message);
    res.status(500).json({ error: "Failed to fetch boards" });
  }
};

export const saveBoardHandler = async (req, res) => {
  try {
    const board = await saveBoard(req.body);
    res.json(board);
  } catch (err) {
    console.error("Error saving board:", err);
    res.status(500).json({ error: "Failed to save board" });
  }
};

export const dummy = async(req, res) => {
  res.json({message: "Hello from dummy endpoint"});
};