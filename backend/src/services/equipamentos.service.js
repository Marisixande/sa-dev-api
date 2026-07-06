import {pool} from "../config/db.js";

class EquipamentosService {
    async getAll() {
        try{
            const res = await pool.query('SELECT * FROM public.equipamentos')
            return res.rows
        }catch (error) {
            console.error(error);
        }
    }
}


export const equipamentosService = new EquipamentosService()