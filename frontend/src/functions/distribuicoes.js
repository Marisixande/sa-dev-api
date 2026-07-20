export async function cadastrarDistribuicao(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const id_funcionario = formData.get("id_funcionario");
    const id_equipamento = formData.get("id_equipamento");
    console.log("dados da distribuição", id_funcionario , id_equipamento);


    try {
        const res = await fetch("http://localhost:3000/distribuicoes'", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id_funcionario , id_equipamento  })
        })
        console.log(res);

    } catch (error) {
        console.error(error);
    }
}

