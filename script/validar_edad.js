const dateInput = document.querySelector("input#date_registro");

dateInput.addEventListener("blur", (evento) => {
    validarNacimiento(evento.target);
})

function validarNacimiento(input) {
    const dateConteiner = document.querySelector("div.date_conteiner");
    const dateLabel = document.querySelector("label[for=date_registro]");
    const edadProx = diferenciaFecha(input)

    if (edadProx > 18 && edadProx < 100) {
        dateConteiner.classList.remove("error");
        dateInput.classList.remove("error")
        dateLabel.classList.remove("error")
    } else {
        dateConteiner.classList.add("error");
        dateInput.classList.add("error")
        dateLabel.classList.add("error")
    }
}

function diferenciaFecha (fecha) {
    const fechaUsuario = new Date(fecha.value);
    const fechaActual = new Date();
    const añoActual = parseInt(fechaActual.getFullYear());
    const añoUsuario = parseInt(fechaUsuario.getFullYear());

    return (añoActual - añoUsuario);
}