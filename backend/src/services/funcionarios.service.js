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
    async getById(id) {
    const res = await pool.query("SELECT * FROM funcionarios WHERE id = $1", [id])
    return res.rows
  }

  async create(data) {
    try {
      const res = await pool.query("INSERT INTO public.funcionarios (nome, email, cargo) values ($1, $2, $3) returning *", [data.nome, data.email, data.cargo]);
      return(res.rows)
    } catch (error) {
      console.error(error)
    }
  }

  async update(id, data) {
    try {
      const res = await pool.query(
        "UPDATE public.funcionarios	SET nome=($1), email=($2) cargo=($3) WHERE id=($3)",
        [data.nome, data.email, data.cargo, id]
      );
      return res.rows;
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id) {
    const res = await pool.query(" DELETE FROM public.funcionarios WHERE id = $1 ", [id]);
    console.log("Funcionario deletado com sucesso")
    return res

  }

}


export const funcionariosService = new FuncionariosService()