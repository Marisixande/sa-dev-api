export async function cadastrarFuncDep(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const id_funcionario = formData.get("id_funcionario");
    const id_departamento = formData.get("id_departamento");
    console.log("dados da relação FuncDep", id_funcionario , id_departamento);


    try {
        const res = await fetch("http://localhost:3000/funcionarios_departamentos'", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id_funcionario , id_departamento  })
        })
        console.log(res);

    } catch (error) {
        console.error(error);
    }
}

