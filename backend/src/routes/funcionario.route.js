import { Router } from "express";
import { funcionariosService } from "../services/funcionarios.service.js";

export const funcionarioRouter = Router()

funcionarioRouter.get('/', async (req, res) => {
    const funcionario = await funcionariosService.getAll()
    res.send(funcionario)
}),

funcionarioRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const funcionario = await funcionariosService.getById(id);

    if (!funcionario || funcionario.length === 0) {
      return res.status(404).json({ message: "Funcionario não encontrado" });
    }
    res.status(200).json(funcionario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

funcionarioRouter.post("/", async (req, res) => {
  try {
    const nome  = req.body;
    if (!nome) {
      return res.status(400).json({ message: "O nome é obrigatório" });
    }
    const newfuncionario = await funcionariosService.create(nome);
    res.status(201).json(newfuncionario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

funcionarioRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    const updated = await funcionariosService.update(id, data);

    if (!updated) {
      return res.status(404).json({ message: "Funcionario não encontrado" });
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

funcionarioRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    const updated = await funcionariosService.update(id, data);

    if (!updated) {
      return res.status(404).json({ message: "Funcionario não encontrado" });
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

funcionarioRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await funcionariosService.delete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Funcionario não encontrado" });
    }
    res.status(200).json({ message: "Funcionario deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});