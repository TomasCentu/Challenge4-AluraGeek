const btn = document.getElementById('login');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let email = document.getElementById('email_login');
    let pass = document.getElementById('pass_login');

    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    listaUsuarios.forEach(element => {
        if (element.email == email.value && element.pass == pass.value) {
            alert("usuario logueado");
            email.classList.remove("error");
            pass.classList.remove("error");
        } else {
            alert("usuario no encontrado")
            email.classList.add("error");
            pass.classList.add("error");
        }
    });
})