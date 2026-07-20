export default function EquipComponent({ data }) {
    return (
        <div >
            <h1>{data.nome}</h1>
            <h1>{data.preco}</h1>
            <h1>{data.estoque}</h1>
            <h1>{data.descricao}</h1>
        </div>
    )
}