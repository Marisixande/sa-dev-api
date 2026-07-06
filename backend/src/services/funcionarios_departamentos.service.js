import {pool} from "../config/db.js";

class FuncDepService {
    async getAll() {
        try{
            const res = await pool.query('SELECT * FROM public.funcionarios_departamentos')
            return res.rows
        }catch (error) {
            console.error(error);
        }
    }
}


export const funcDepService = new FuncDepService()