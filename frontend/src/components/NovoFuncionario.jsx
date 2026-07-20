import { cadastrarFuncionario } from "../functions/funcionarios.js";

export default function Funcionarios() {
    return (
        <form onSubmit={cadastrarFuncionario}>
            <label htmlFor="">
                Nome do funcionario:
                <input type="text" name="nome" />
            </label>
            <label htmlFor="">
                Email do funcionario:
                <input type="text" email="email" />
            </label>
            <label htmlFor="">
                Cargo do funcionario:
                <input type="text" position="cargo" />
            </label>
            <button type="submit">Cadastrar Funcionario</button>
        </form>
    )
}