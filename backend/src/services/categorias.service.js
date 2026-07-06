import {pool} from "../config/db.js";

class CategoriasService {
    async getAll() {
        try{
            const res = await pool.query('SELECT * FROM categorias')
            return res.rows
        }catch (error) {
            console.error(error);
        }
    }
}

export const categoriasService = new CategoriasService()