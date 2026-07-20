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
    async getById(id) {
    const res = await pool.query("SELECT * FROM distribuicoes WHERE id = $1", [id])
    return res.rows
  }

  async create(data) {
    try {
      const res = await pool.query("INSERT INTO public.distribuicoes  (id_funcionario , data, id_equipamento ) values ($1, $2, $3) returning *", [data.id_funcionario , data.data, data.id_equipamento  ]);
      return(res.rows)
    } catch (error) {
      console.error(error)
    }
  }

  async update(id, data) {
    try {
      const res = await pool.query(
        "UPDATE public.distribuicoes SET id_funcionario =($1), data=($2), id_equipamento =($3) WHERE id=($4)",
        [data.id_funcionario , data.data, data.id_equipamento  ,  id]
      );
      return res.rows;
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id) {
    const res = await pool.query(" DELETE FROM public.distribuicoes WHERE id = $1 ", [id]);
    console.log("Distribuição deletada com sucesso")
    return res

  }

}


export const distribuicoesService = new DistribuicoesService()
