import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { funcionarioRouter } from './routes/funcionario.route.js'
import { departamentoRouter } from './routes/departamento.route.js'
import { funcDepRouter } from './routes/departamento_funcionario.route.js'
import { equipamentoRouter } from './routes/equipamento.route.js'
import { categoriaRouter } from './routes/categoria.route.js'
import { equipCategRouter } from './routes/categoria_equipamento.route.js'
const app = express()

const port = process.env.API_PORT

app.use(cors())

app.get('/', (req, res) => {
    return res.send('API Funcionando')
})

app.use('/funcionarios', funcionarioRouter)
app.use('/departamentos', departamentoRouter)
app.use('/funcionarios_departamentos', funcDepRouter)
app.use('/equipamentos', equipamentoRouter)
app.use('/categorias', categoriaRouter)
app.use('/equipamentos_categorias', equipCategRouter)


app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
})