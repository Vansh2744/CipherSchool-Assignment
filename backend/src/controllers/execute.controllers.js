import { validateSQL } from "../utils/validateSQL.js";
import pool from "../db/postgres.js";

export const executeQuery = async (req, res) => {
    const { query } = req.body;

    if (!validateSQL(query)) {
        return res.status(400).json({ error: "Only SELECT allowed" });
    }

    const client = await pool.connect();
    

    try {
        await client.query("SET search_path TO public");
        const result = await client.query(query);
        
        res.json(result.rows);
    } catch (e) {
        res.status(400).json({ error: e.message });
    } finally {
        client.release();
    }
}
