import { Router } from "express";
import { funcionariosService } from "../services/funcionarios.service.js";

export const funcionarioRouter = Router()

funcionarioRouter.get('/', async (req, res) => {
    const funcionario = await funcionariosService.getAll()
    res.send(funcionario)
})