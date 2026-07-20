import { cadastrarFuncDep } from "../functions/funcDep.js";

export default function FuncDep() {
    return (
        <form onSubmit={cadastrarFuncDep}>
            <label htmlFor="">
                Id do funcionario:
                <input type="text" id="id_funcionario" />
            </label>
            <label htmlFor="">
                Id do departamento:
                <input type="text" id="id_departamento" />
            </label>
            <button type="submit">Cadastrar Relação FuncDep</button>
        </form>
    )
}