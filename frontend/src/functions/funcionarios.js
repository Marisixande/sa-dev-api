export async function cadastrarFuncionario(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const nome = formData.get("nome");
    const email = formData.get("email");
    const cargo = formData.get("cargo");
    console.log("dados do funcionario", nome , email, cargo);


    try {
        const res = await fetch("http://localhost:3000/funcionarios", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, email, cargo })
        })
        console.log(res);

    } catch (error) {
        console.error(error);
    }
}