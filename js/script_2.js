// Esperar que se genere el evento click en el botón
window.onload = esperaEvento;

function esperaEvento() {
    document
        .querySelector("#botonEnvia")
        .addEventListener("click", enviarFormulario);
}

// Función para enviar el formulario cuando todos los campos estén validados
function enviarFormulario() {
    let camposValidados = 0;

    if (validarNombre()) {
        camposValidados++;
    }
    if (validarMail()) {
        camposValidados++;
    }
    if (validarTelefono()) {
        camposValidados++;
    }
    if (validarNoticia()) {
        camposValidados++;
    }
    if (validarOpciones()) {
        camposValidados++;
    }
    if (validarPolitica()) {
        camposValidados++;
    }

    if (camposValidados == 6) {
        alert("Formulario enviado con éxito");
        document.formulario1.submit();
    }
}

// Validación del nombre y apellidos
function validarNombre() {
    let nombreUsuario = document.querySelector("#nombre").value;
    let entrada = document.querySelector("#nombre");
    let spanError = document.querySelector("#nombreError");

    if (
        nombreUsuario == null ||
        nombreUsuario.length == 0 ||
        /^\s+$/.test(nombreUsuario)
    ) {
        spanError.innerHTML = "- Introduzca un nombre, por favor";
        spanError.className = "error";
        entrada.className = "borderror";
        return false;
    } else {
        spanError.className = "noError";
        entrada.className = "noborderror";
        return true;
    }
}

// VALIDACIÓN DEL CORREO ELECTRÓNICO
function validarMail() {
    let correoUsuario = document.querySelector("#correo").value;
    let entrada = document.querySelector("#correo");
    let spanError = document.querySelector("#correoError");

    if (/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)(\.\w{2.6})+$/.test(correoUsuario)) {
        spanError.className = "noError";
        entrada.className = "noborderror";
        return true;
    } else {
        spanError.innerHTML = "- Introduzca un correo válido, por favor";
        spanError.className = "error";
        entrada.className = "borderror";
        return false;
    }
}

// VALIDACIÓN DEL TELÉFONO
function validarTelefono() {
    let telefonoUsuario = document.querySelector("#telefono").value;
    let entrada = document.querySelector("#telefono");
    let spanError = document.querySelector("#telefonoError");

    if (!/^\d{9}$/.test(telefonoUsuario)) {
        spanError.innerHTML = "- El teléfono introducido no es válido";
        spanError.className = "error";
        entrada.className = "borderror";
        return false;
    } else {
        spanError.className = "noError";
        entrada.className = "noborderror";
        return true;
    }
}

// Validación de entrada tipo radio
function validarNoticia() {
    let noticias = document.getElementsByClassName("noticia");
    let spanError = document.querySelector("#noticiaError");
    let seleccion = false;

    for (i = 0; i < noticias.length; i++) {
        if (noticias[i].checked) {
            spanError.className = "noError";
            seleccion = true;
            return seleccion;
            break;
        }
    }

    if (!seleccion) {
        spanError.innerHTML = "- Debe seleccionar una opción";
        spanError.className = "error";
        return false;
    }
}

// Validacion de la lista desplegable
function validarOpciones() {
    let opciones = document.querySelector("#provincia").selectedIndex;
    let spanError = document.querySelector("#provinciaError");

    if (opciones == null || opciones == 0) {
        spanError.innerHTML = "- Debe seleccionar una província";
        spanError.className = "error";
        return false;
    } else {
        spanError.className = "noError";
        return true;
    }
}

// VALIDACIÓN DEL CAMPO POLÍTICA PRIVACIDAD
function validarPolitica() {
    let politicaPrivacidad = document.querySelector("#condiciones");
    let spanError = document.querySelector("#politicaError");

    if (!politicaPrivacidad.checked) {
        spanError.innerHTML = "- Debe aceptar nuestra política de privacidad";
        spanError.className = "error";
        return false;
    } else {
        spanError.className = "noError";
        return true;
    }
}
