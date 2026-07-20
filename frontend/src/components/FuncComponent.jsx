export default function FuncComponent({ data }) {
    return (
        <div >
            <h1>{data.nome}</h1>
            <h1>{data.email}</h1>
            <h1>{data.cargo}</h1>
        </div>
    )
}