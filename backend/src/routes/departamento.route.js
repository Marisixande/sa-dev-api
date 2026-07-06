import { Router } from "express";
import { departamentosService } from "../services/departamentos.service.js";

export const departamentoRouter = Router()

departamentoRouter.get('/', async (req, res) => {
    const departamento = await departamentosService.getAll()
    res.send(departamento)
})