import { cadastrarEquipamentos } from "../functions/equipamentos.js";

export default function Equipamentos() {
    return (
        <form onSubmit={cadastrarEquipamentos}>
            <label htmlFor="">
                Nome do equipamento:
                <input type="text" name="nome" />
            </label>
            <label htmlFor="">
                 Preço do equipamento:
                <input type="text" price="preco" />
            </label>
            <label htmlFor="">
                 Estoque do equipamento:
                <input type="text" stock="estoque" />
            </label>
            <label htmlFor="">
                Descrição do equipamento:
                <input type="text" description="descricao" />
            </label>
            <button type="submit">Cadastrar Equipamento</button>
        </form>
    )
}