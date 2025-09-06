import pool from "../db.js";

// Fetch all boards
export const getAllBoards = async () => {
  const result = await pool.query("SELECT id, name FROM boards ORDER BY id ASC");
  return result.rows;
};