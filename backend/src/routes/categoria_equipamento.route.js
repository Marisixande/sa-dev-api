import { Router } from "express";
import { equipCategService } from "../services/equipamento_categoria.service.js";

export const equipCategRouter = Router()

equipCategRouter.get('/', async (req, res) => {
    const equipCateg = await equipCategService.getAll()
    res.send(equipCateg)
}),

equipCategRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const equipCateg = await equipCategService.getById(id);

    if (!equipCateg || equipCateg.length === 0) {
      return res.status(404).json({ message: "Relação não encontrada" });
    }
    res.status(200).json(equipCateg);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

equipCategRouter.post("/", async (req, res) => {
  try {
    const  id_equipamento  = req.body;
    if (!id_equipamento ) {
      return res.status(400).json({ message: "O id do equipamento é obrigatório" });
    }
    const newequipCateg = await equipCategService.create(id_equipamento );
    res.status(201).json(newequipCateg);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

equipCategRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    const equipCategAtualizada = await equipCategService.update(id, data);

    if (!equipCategAtualizada ) {
      return res.status(404).json({ message:  "Relação não encontrada" });
    }
    res.status(200).json(equipCategAtualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

equipCategRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    const equipCategAtualizada = await equipCategService.update(id, data);

    if (!equipCategAtualizada) {
      return res.status(404).json({ message: "Relação não encontrada" });
    }
    res.status(200).json(equipCategAtualizada );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

equipCategRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await equipCategService.delete(id);

    if (!deleted) {
      return res.status(404).json({ message:  "Relação não encontrada" });
    }
    res.status(200).json({ message: "Relação deletada com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
