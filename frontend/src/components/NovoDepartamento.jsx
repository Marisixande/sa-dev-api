import { cadastrarDepartamento } from "../functions/departamentos.js";

export default function Departamentos() {
    return (
        <form onSubmit={cadastrarDepartamento}>
            <label htmlFor="">
                Nome do departamento:
                <input type="text" name="nome" />
            </label>
            <label htmlFor="">
                Email do departamento:
                <input type="text" email="email" />
            </label>
            <button type="submit">Cadastrar departamento</button>
        </form>
    )
}