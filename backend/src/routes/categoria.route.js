import { Router } from "express";
import { categoriasService } from "../services/categorias.service.js";

export const categoriaRouter = Router()

categoriaRouter.get('/', async (req, res) => {
    const categoria = await categoriasService.getAll()
    res.send(categoria)
})