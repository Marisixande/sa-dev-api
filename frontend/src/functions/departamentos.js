export async function cadastrarDepartamento(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const nome = formData.get("nome");
    const email = formData.get("email");
    console.log("dados do departamento", nome , email);


    try {
        const res = await fetch("http://localhost:3000/departamentos", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, email })
        })
        console.log(res);

    } catch (error) {
        console.error(error);
    }
}