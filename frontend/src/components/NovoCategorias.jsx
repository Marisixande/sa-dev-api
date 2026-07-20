import { cadastrarCategorias } from "../functions/categorias.js";

export default function Categorias() {
    return (
        <form onSubmit={cadastrarCategorias}>
            <label htmlFor="">
                Nome da categoria:
                <input type="text" name="nome" />
            </label>
            <button type="submit">Cadastrar Categoria</button>
        </form>
    )
}