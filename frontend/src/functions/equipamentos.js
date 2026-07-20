export async function cadastrarEquipamentos(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const nome = formData.get("nome");
    const preco = formData.get("preco");
    const estoque = formData.get("estoque");
    const descricao = formData.get("descricao");
    console.log("dados do equipamento", nome, preco, estoque, descricao);


    try {
        const res = await fetch("http://localhost:3000/equipamentos'", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, preco, estoque, descricao })
        })
        console.log(res);

    } catch (error) {
        console.error(error);
    }
}

