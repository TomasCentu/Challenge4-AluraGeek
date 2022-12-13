const inputs = document.querySelectorAll("input");
const txtareas = document.querySelectorAll("textarea");

txtareas.forEach( txtarea => {
    txtarea.addEventListener('blur', () => {
        if (txtarea.value === "") {        
            txtarea.classList.add("error");
        } else {
            txtarea.classList.remove("error");
        }
    })
})

function validar(input) {

    if (input.checkValidity()) {
        input.classList.remove("error");
    } else {
        input.classList.add("error");
    }
};

inputs.forEach( input => {
    input.addEventListener("blur", (input) => {
        validar(input.target);
    })
});