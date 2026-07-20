export default function FuncComponent({ data }) {
    return (
        <div >
            <h1>{data.id_funcionario}</h1>
            <h1>{data.id_departamento}</h1>
        </div>
    )
}