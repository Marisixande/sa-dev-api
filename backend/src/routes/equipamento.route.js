import { Router } from "express";
import { equipamentosService } from "../services/equipamentos.service.js";

export const equipamentoRouter = Router()

equipamentoRouter.get('/', async (req, res) => {
    const equipamento = await equipamentosService.getAll()
    res.send(equipamento)
})