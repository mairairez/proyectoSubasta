const valorEntrada = 200;

let descuentoPrimerFecha = 80;
let descuentoSegunFecha = 50;
let descuentoTercerFecha = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cantidad = document.getElementById("cantTicket");
let fecha = document.getElementById("fechaSelec");

function totalPagar() {

    if (nombre.value === "") {
        alert("Por favor, Ingrese su nombre");
        return;
    }

    if (apellido.value === "") {
        alert("Por favor, Ingrese su apellido");
        return;
    }

    if (email.value === "") {
        alert("Por favor, Ingrese su email");
        return;
    }

    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if (!emailValido(email.value)) {
        alert("Por favor, escriba una dirección de correo electrónico válida");
        return;
    }

    if (cantidad.value === "") {
        alert("Por favor, Ingrese la cantidad de tickets");
        return;
    }
    if (fecha.value === "") {
        alert("Por favor, Ingrese la fecha elegida a comprar");
        return;
    }


    let totalValor = (cantidad.value) * valorEntrada;

    if(fecha.value == 1) {
        totalValor = totalValor - ((descuentoPrimerFecha/100)*totalValor);
    }

    if(fecha.value == 2) {
        totalValor = totalValor - ((descuentoSegunFecha/100)*totalValor);
    }
    
    if(fecha.value == 3) {
        totalValor = totalValor - ((descuentoTercerFecha/100)*totalValor);
    }

    totalPago.innerHTML = totalValor;
}

btnResumen.addEventListener('click', totalPagar);

function resetTotal(){
    totalPago.innerHTML = "";
}
btnBorrar.addEventListener('click', resetTotal); 