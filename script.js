let botEnviar = document.getElementById("botonEnviar");
botEnviar.addEventListener("click", enviarMensaje);

// Establecer el límite de caracteres
const maxCaracteres = 200;

function enviarMensaje(event) {
    event.preventDefault();
    
    //Datos del formulario
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;
    
    if (nombre === "" || correo === "" || mensaje === "") {
        document.getElementById("cont_error").textContent = "Por favor, completá todos los campos.";
    
    } else {
        document.getElementById("cont_error").textContent = "";
        
        console.log(nombre);
        console.log(correo);
        console.log(mensaje);

        alert("Mensaje enviado. ¡Muchas gracias por contactarse!")

        limpiarFormulario();
        
        document.getElementById("formContacto").submit();
    }
}

function limpiarFormulario() {

    document.getElementById("nombre").value="";
    document.getElementById("correo").value="";
    document.getElementById("mensaje").value="";
    document.getElementById("contadorCaracteres").textContent="";
}

// Función para actualizar el contador de caracteres
function actualizarContador() {
    let mensaje = document.getElementById("mensaje").value;
    const contadorElemento = document.getElementById("contadorCaracteres");
    contadorElemento.textContent = mensaje.length + "/" + maxCaracteres;
}