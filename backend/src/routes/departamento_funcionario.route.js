import { Router } from "express";
import { funcDepService } from "../services/departamentos.service.js";

export const funcDepRouter = Router()

funcDepRouter.get('/', async (req, res) => {
    const funcDep = await funcDepService.getAll()
    res.send(funcDep)
}),

funcDepRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const funcDep = await funcDepService.getById(id);

    if (!funcDep || funcDep.length === 0) {
      return res.status(404).json({ message: "Relação não encontrada" });
    }
    res.status(200).json(funcDep);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

funcDepRouter.post("/", async (req, res) => {
  try {
    const  id_funcionario  = req.body;
    if (!id_funcionario  ) {
      return res.status(400).json({ message: "O id do funcionario é obrigatório" });
    }
    const newfuncDep = await funcDepService.create(id_funcionario );
    res.status(201).json(newfuncDep);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

funcDepRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    const funcDepAtualizada = await funcDepService.update(id, data);

    if (!funcDepAtualizada ) {
      return res.status(404).json({ message:  "Relação não encontrada" });
    }
    res.status(200).json(funcDepAtualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

funcDepRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    const funcDepAtualizada = await funcDepService.update(id, data);

    if (!funcDepAtualizada) {
      return res.status(404).json({ message: "Relação não encontrada" });
    }
    res.status(200).json(funcDepAtualizada );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

funcDepRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await funcDepService.delete(id);

    if (!deleted) {
      return res.status(404).json({ message:  "Relação não encontrada" });
    }
    res.status(200).json({ message: "Relação deletada com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

