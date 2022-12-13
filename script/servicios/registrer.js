const btn = document.getElementById('registro');

const nombre = document.getElementById('nombre_registro');
const email = document.getElementById('email_registro');
const emailConfirm = document.getElementById('email_registro_2');
const pass = document.getElementById('password_registro');
const passConfirm = document.getElementById('password_registro_2');
const edad = document.getElementById('date_registro');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const nombreVal = nombre.value;
    const emailVal = email.value;
    const emailConfirmVal = emailConfirm.value;
    const passVal = pass.value;
    const passConfirmVal = passConfirm.value;
    const edadVal = edad.value;

    if (nombreVal !== "" && emailVal !== "" && 
        emailConfirmVal !== "" && passVal !== "" && 
        passConfirmVal !== "" && edadVal !== "") {

        if (emailConfirmVal == emailVal && passVal == passConfirmVal) {
            const usuarioObj = {
                'nombre' : nombreVal,
                'email' : emailVal,
                'pass' : passVal,
                'edad' : edadVal
            }
        
            listaUsuarios.push(usuarioObj);
        
            localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
        
            alert('registrado completo');
        }

        else {
            alert('datos no validos');
        }
    }
})