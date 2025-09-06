import { getAllBoards } from "../models/boardsModel.js";

export const getBoards = async (req, res) => {
  try {
    const boards = await getAllBoards();
    res.json(boards);
  } catch (err) {
    console.error("Error fetching boards:", err.message);
    res.status(500).json({ error: "Failed to fetch boards" });
  }
};

export const dummy = async(req, res) => {
  res.json({message: "Hello from dummy endpoint"});
};