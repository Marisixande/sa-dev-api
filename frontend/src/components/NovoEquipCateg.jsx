import { cadastrarEquipCateg } from "../functions/equipCateg.js";

export default function EquipCateg() {
    return (
        <form onSubmit={cadastrarEquipCateg}>
            <label htmlFor="">
                Id do categoria:
                <input type="text" id="id_categoria" />
            </label>
            <label htmlFor="">
                Id do equipamento:
                <input type="text" id="id_equipamento" />
            </label>
            <button type="submit">Cadastrar Relação EquipCateg</button>
        </form>
    )
}