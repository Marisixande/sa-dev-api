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
    async getById(id) {
    const res = await pool.query("SELECT * FROM departamentos WHERE id = $1", [id])
    return res.rows
  }

  async create(data) {
    try {
      const res = await pool.query("INSERT INTO public.departamentos  (nome, email) values ($1, $2) returning *", [data.nome, data.email]);
      return(res.rows)
    } catch (error) {
      console.error(error)
    }
  }

  async update(id, data) {
    try {
      const res = await pool.query(
        "UPDATE public.departamentos SET nome=($1), email=($2) WHERE id=($3)",
        [data.nome, data.email,  id]
      );
      return res.rows;
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id) {
    const res = await pool.query(" DELETE FROM public.departamentos  WHERE id = $1 ", [id]);
    console.log("Departamento deletado com sucesso")
    return res

  }

}


export const departamentosService = new DepartamentosService()
