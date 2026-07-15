export default function Funcionarios({funcionariosB}) {
    return (
        <ul>
            {funcionariosB.map((funcionario)=>(
                <li key={funcionario.id}>
                   <p>Nome do funcionario: {funcionario.nome}</p>
                   <p>email do funcionario: {funcionario.email}</p>
                   <p>Cargo do funcionario: {funcionario.cargo}</p>
                </li>
            ))}
        </ul>
    )
}