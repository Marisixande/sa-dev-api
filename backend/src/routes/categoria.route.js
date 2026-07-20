import { Router } from "express";
import { categoriasService } from "../services/categorias.service.js";

export const categoriaRouter = Router()

categoriaRouter.get('/', async (req, res) => {
    const categoria = await categoriasService.getAll()
    res.send(categoria)
}),

categoriaRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await categoriasService.getById(id);

    if (!categoria || categoria.length === 0) {
      return res.status(404).json({ message: "Categoria não encontrada" });
    }
    res.status(200).json(funcionario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

categoriaRouter.post("/", async (req, res) => {
  try {
    const nome  = req.body;
    if (!nome) {
      return res.status(400).json({ message: "O nome é obrigatório" });
    }
    const newcategoria = await categoriasService.create(nome);
    res.status(201).json(newcategoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

categoriaRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    const categoriaAtualizada = await categoriasService.update(id, data);

    if (!categoriaAtualizada ) {
      return res.status(404).json({ message: "Categoria não encontrada" });
    }
    res.status(200).json(categoriaAtualizada );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

categoriaRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    const categoriaAtualizada = await categoriasService.update(id, data);

    if (!categoriaAtualizada ) {
      return res.status(404).json({ message: "Categoria não encontrada" });
    }
    res.status(200).json(categoriaAtualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

categoriaRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await categoriasService.delete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Categoria não encontrada" });
    }
    res.status(200).json({ message: "Categoria deletada com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

