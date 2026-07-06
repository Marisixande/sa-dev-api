import {pool} from "../config/db.js";

class EquipCategService {
    async getAll() {
        try{
            const res = await pool.query('SELECT * FROM public.equipamento_categoria')
            return res.rows
        }catch (error) {
            console.error(error);
        }
    }
}


export const equipCategService = new EquipCategService()