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
    async getById(id) {
    const res = await pool.query("SELECT * FROM equipamentos WHERE id = $1", [id])
    return res.rows
  }

  async create(data) {
    try {
      const res = await pool.query("INSERT INTO public.equipamentos (nome, preco, estoque, descricao) values ($1, $2, $3, $4) returning *", [data.nome, data.preco , data.estoque, data.descricao]);
      return(res.rows)
    } catch (error) {
      console.error(error)
    }
  }

  async update(id, data) {
    try {
      const res = await pool.query(
        "UPDATE public.equipamentos	SET nome=($1), preco=($2) estoque=($3) descricao=($4) WHERE id=($3)",
        [data.nome, data.preco, data.estoque, data.descricao, id]
      );
      return res.rows;
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id) {
    const res = await pool.query(" DELETE FROM public.equipamentos WHERE id = $1 ", [id]);
    console.log("Equipamento deletado com sucesso")
    return res

  }

}


export const equipamentosService = new EquipamentosService()
