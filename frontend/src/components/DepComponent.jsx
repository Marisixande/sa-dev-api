export default function DepComponent({ data }) {
    return (
        <div >
            <h1>{data.nome}</h1>
            <h1>{data.email}</h1>
        </div>
    )
}