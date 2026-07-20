import {pool} from "../config/db.js";

class EquipCategService {
    async getAll() {
        try{
            const res = await pool.query('SELECT * FROM public.equipamento_categoria')
            return res.rows
        }catch (error) {
            console.error(error);
        }
    }
    async getById(id) {
    const res = await pool.query("SELECT * FROM equipamento_categoria WHERE id = $1", [id])
    return res.rows
  }

  async create(data) {
    try {
      const res = await pool.query("INSERT INTO public.equipamento_categoria  (id_categoria , id_equipamento ) values ($1, $2) returning *", [data.id_categoria , data.id_equipamento  ]);
      return(res.rows)
    } catch (error) {
      console.error(error)
    }
  }

  async update(id, data) {
    try {
      const res = await pool.query(
        "UPDATE public.equipamento_categoria SET id_categoria=($1), id_equipamento=($2) WHERE id=($3)",
        [data.id_categoria , data.id_equipamento ,  id]
      );
      return res.rows;
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id) {
    const res = await pool.query(" DELETE FROM public.equipamento_categoria WHERE id = $1 ", [id]);
    console.log("Relação deletada com sucesso")
    return res

  }

}


export const equipCategService = new EquipCategService()