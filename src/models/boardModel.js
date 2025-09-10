import pool from "../db.js";

export const getAllBoards = async () => {
  const result = await pool.query("SELECT * FROM get_all_boards()");
  return result.rows;
};

export const saveBoard = async (board) => {
  const result = await pool.query(
    "SELECT save_board($1, $2, $3) AS board",
    [
      board.id || null,
      board.name,
      JSON.stringify(board.columns || []),
    ]
  );
  return result.rows[0].board;
};