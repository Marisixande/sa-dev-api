import { Router } from "express";
import { departamentosService } from "../services/departamentos.service.js";

export const departamentoRouter = Router()

departamentoRouter.get('/', async (req, res) => {
    const departamento = await departamentosService.getAll()
    res.send(departamento)
}),

departamentoRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const departamento = await departamentosService.getById(id);

    if (!departamento || departamento.length === 0) {
      return res.status(404).json({ message: "Departamento não encontrado" });
    }
    res.status(200).json(departamento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

departamentoRouter.post("/", async (req, res) => {
  try {
    const nome  = req.body;
    if (!nome) {
      return res.status(400).json({ message: "O nome é obrigatório" });
    }
    const newdepartamento = await departamentosService.create(nome);
    res.status(201).json(newdepartamento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

departamentoRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    const departamentoAtualizado = await departamentosService.update(id, data);

    if (!departamentoAtualizado ) {
      return res.status(404).json({ message:  "Departamento não encontrado" });
    }
    res.status(200).json(departamentoAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

departamentoRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    const departamentoAtualizado = await departamentosService.update(id, data);

    if (!departamentoAtualizado) {
      return res.status(404).json({ message: "Departamento não encontrado" });
    }
    res.status(200).json(departamentoAtualizado );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

departamentoRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await departamentosService.delete(id);

    if (!deleted) {
      return res.status(404).json({ message:  "Departamento não encontrado" });
    }
    res.status(200).json({ message: "Departamento deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
