import { Router } from "express";
import { distribuicoesService } from "../services/distribuicoes.service.js";

export const distribuicaoRouter = Router()

distribuicaoRouter.get('/', async (req, res) => {
    const distribuicao = await distribuicoesService.getAll()
    res.send(distribuicao)
})