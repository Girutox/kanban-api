import pool from "../db.js";

// Fetch all boards
export const getAllBoards = async () => {
  const result = await pool.query("SELECT * FROM get_all_boards()");
  return result.rows;
};