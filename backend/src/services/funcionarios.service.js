import {pool} from "../config/db.js";

class FuncionariosService {
    async getAll() {
        try{
            const res = await pool.query('SELECT * FROM public.funcionarios')
            return res.rows
        }catch (error) {
            console.error(error);
        }
    }
}


export const funcionariosService = new FuncionariosService()