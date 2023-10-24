let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje");

let btnEnviar = document.getElementById("btnEnviar");
let btnBorrar = document.getElementById("btnBorrar");

function enviarFormulario() {
    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if (!emailValido(email.value)) {
        alert("Por favor, escriba una dirección de correo electrónico válida");
        return;
    }

    if (mensaje.value === "") {
        alert("Por favor, ingrese su mensaje");     
        return;
    }

    alert("Formulario enviado exitosamente");
}

btnEnviar.addEventListener("click", enviarFormulario);

function resetTodo() {
    email.value = ""; 
    mensaje.value = "";
}

btnBorrar.addEventListener("click", resetTodo);


