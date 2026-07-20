export async function cadastrarEquipCateg(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const id_categoria = formData.get("id_categoria");
    const id_equipamento = formData.get("id_equipamento");
    console.log("dados da relação EquipCateg", id_categoria , id_equipamento);


    try {
        const res = await fetch("http://localhost:3000/equipamentos_categorias'", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id_categoria , id_equipamento  })
        })
        console.log(res);

    } catch (error) {
        console.error(error);
    }
}

