import { Router } from "express";
import { equipCategService } from "../services/equipamento_categoria.service.js";

export const equipCategRouter = Router()

equipCategRouter.get('/', async (req, res) => {
    const equipCateg = await equipCategService.getAll()
    res.send(equipCateg)
})