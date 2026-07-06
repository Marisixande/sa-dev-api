import {pool} from "../config/db.js";

class DepartamentosService {
    async getAll() {
        try{
            const res = await pool.query('SELECT * FROM public.departamentos')
            return res.rows
        }catch (error) {
            console.error(error);
        }
    }
}


export const departamentosService = new DepartamentosService()