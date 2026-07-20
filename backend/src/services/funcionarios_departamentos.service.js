import {pool} from "../config/db.js";

class FuncDepService {
    async getAll() {
        try{
            const res = await pool.query('SELECT * FROM public.funcionarios_departamento')
            return res.rows
        }catch (error) {
            console.error(error);
        }
    }
    async getById(id) {
    const res = await pool.query("SELECT * FROM funcionarios_departamento WHERE id = $1", [id])
    return res.rows
  }

  async create(data) {
    try {
      const res = await pool.query("INSERT INTO public.funcionarios_departamento  (id_funcionario , id_departamento ) values ($1, $2) returning *", [data.id_funcionario , data.id_departamento ]);
      return(res.rows)
    } catch (error) {
      console.error(error)
    }
  }

  async update(id, data) {
    try {
      const res = await pool.query(
        "UPDATE public.funcionarios_departamento SET id_funcionario =($1), id_departamento =($2) WHERE id=($3)",
        [data.id_funcionario , data.id_departamento ,  id]
      );
      return res.rows;
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id) {
    const res = await pool.query(" DELETE FROM public.funcionarios_departamento WHERE id = $1 ", [id]);
    console.log("Relação deletada com sucesso")
    return res

  }

}


export const funcDepService = new FuncDepService()

