import { Router } from "express";
import { funcDepService } from "../services/funcionarios_departamentos.service.js";

export const funcDepRouter = Router()

funcDepRouter.get('/', async (req, res) => {
    const funcDep = await funcDepService.getAll()
    res.send(funcDep)
})