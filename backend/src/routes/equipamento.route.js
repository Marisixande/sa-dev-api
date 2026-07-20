import { Router } from "express";
import { equipamentosService } from "../services/equipamentos.service.js";

export const equipamentoRouter = Router()

equipamentoRouter.get('/', async (req, res) => {
    const equipamento = await equipamentosService.getAll()
    res.send(equipamento)
}),

equipamentoRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const equipamento = await equipamentosService.getById(id);

    if (!equipamento || equipamento.length === 0) {
      return res.status(404).json({ message: "Equipamento não encontrado" });
    }
    res.status(200).json(equipamento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

equipamentoRouter.post("/", async (req, res) => {
  try {
    const nome  = req.body;
    if (!nome) {
      return res.status(400).json({ message: "O nome é obrigatório" });
    }
    const newequipamento = await equipamentosService.create(nome);
    res.status(201).json(newequipamento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

equipamentoRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    const updated = await equipamentosService.update(id, data);

    if (!updated) {
      return res.status(404).json({ message: "Equipamento não encontrado" });
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

equipamentoRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    const updated = await equipamentosService.update(id, data);

    if (!updated) {
      return res.status(404).json({ message: "Equipamento não encontrado" });
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

equipamentoRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await equipamentosService.delete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Equipamento não encontrado" });
    }
    res.status(200).json({ message: "Equipamento deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

