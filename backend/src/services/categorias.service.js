import {pool} from "../config/db.js";

class CategoriasService {
    async getAll() {
        try{
            const res = await pool.query('SELECT * FROM categorias')
            return res.rows
        }catch (error) {
            console.error(error);
        }
    }

    async getById(id) {
    const res = await pool.query("SELECT * FROM categorias WHERE id = $1", [id])
    return res.rows
  }

  async create(data) {
    try {
      const res = await pool.query("INSERT INTO public.categorias (nome) values ($1) returning *", [data.nome]);
      return(res.rows)
    } catch (error) {
      console.error(error)
    }
  }

  async update(id, data) {
    try {
      const res = await pool.query(
        "UPDATE public.categorias	SET nome=($1)	WHERE id=($3)",
        [data.nome, id]
      );
      return res.rows;
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id) {
    const res = await pool.query(" DELETE FROM public.categorias WHERE id = $1 ", [id]);
    console.log("Categoria deletada com sucesso")
    return res

  }

}

export const categoriasService = new CategoriasService()