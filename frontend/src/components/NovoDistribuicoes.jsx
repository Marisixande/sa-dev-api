import { cadastrarDistribuicao } from "../functions/distribuicoes.js";

export default function Distribuicoes() {
    return (
        <form onSubmit={cadastrarDistribuicao}>
            <label htmlFor="">
                Id do funcionario:
                <input type="text" id="id_funcionario" />
            </label>
            <label htmlFor="">
                Id do equipamento:
                <input type="text" id="id_equipamento" />
            </label>
            <button type="submit">Cadastrar Distribuicao</button>
        </form>
    )
}