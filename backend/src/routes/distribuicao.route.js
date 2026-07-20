import { Router } from "express";
import { distribuicoesService } from "../services/distribuicoes.service.js";

export const distribuicaoRouter = Router()

distribuicaoRouter.get('/', async (req, res) => {
    const distribuição = await distribuicoesService.getAll()
    res.send(funcDep)
}),

distribuicaoRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const distribuicao = await distribuicoesService.getById(id);

    if (!distribuicao || distribuicao.length === 0) {
      return res.status(404).json({ message: "Distribuição não encontrada" });
    }
    res.status(200).json(distribuicao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

distribuicaoRouter.post("/", async (req, res) => {
  try {
    const  id_funcionario  = req.body;
    if (!id_funcionario  ) {
      return res.status(400).json({ message: "O id do funcionario é obrigatório" });
    }
    const newdistribuicao = await distribuicoesService.create(id_funcionario );
    res.status(201).json(newdistribuicao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

distribuicaoRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    const distribuicaoAtualizada = await distribuicoesService.update(id, data);

    if (!distribuicaoAtualizada ) {
      return res.status(404).json({ message:  "Distribuição não encontrada" });
    }
    res.status(200).json(distribuicaoAtualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

distribuicaoRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    const distribuicaoAtualizada = await distribuicoesService.update(id, data);

    if (!distribuicaoAtualizada) {
      return res.status(404).json({ message: "Distribuição não encontrada" });
    }
    res.status(200).json(distribuicaoAtualizada );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

distribuicaoRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await distribuicoesService.delete(id);

    if (!deleted) {
      return res.status(404).json({ message:  "Distribuição não encontrada" });
    }
    res.status(200).json({ message: "Distribuição deletada com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
