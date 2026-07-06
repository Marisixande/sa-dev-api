import {pool} from "../config/db.js";

class DistribuicoesService {
    async getAll() {
        try{
            const res = await pool.query('SELECT * FROM public.distribuicoes')
            return res.rows
        }catch (error) {
            console.error(error);
        }
    }
}


export const distribuicoesService = new DistribuicoesService()