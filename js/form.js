window.onload = esperarEvento;

function esperarEvento() {
    document.querySelector("#botonEnvia").addEventListener("click", validar);
}

function validar() {
    // Establecer condiciones de validación del nombre
    let nombre = validarNombre();

    // Establecer condiciones de validación campo correo electrónico
    let correo = validarCorreo();

    // Establecer las condiciones de validación del teléfono
    let telefono = validarTelefono();

    // Establecer las condiciones de validación de una entrada de tipo radio
    let radio = validarRadio();

    // Establecer las condiciones de provincia
    let provincia = validarProvincia();

    // Evaluación de una entrada tipo checkbox
    let politicaPrivacidad = validarPoliticaPrivacidad();

    if (
        nombre == true &&
        correo == true &&
        telefono == true &&
        radio == true &&
        provincia == true &&
        politicaPrivacidad == true
    ) {
        alert("Formulario enviado con éxito");
        document.formulario1.submit();
    }
}

function validarNombre() {
    let nombreUsuario = document.querySelector("#nombre").value;
    let entradaNombre = document.querySelector("#nombre");
    let spanErrorNombre = document.querySelector("#nombreError");
    if (
        nombreUsuario == null ||
        nombreUsuario.length == 0 ||
        /^\d+$/.test(nombreUsuario)
    ) {
        spanErrorNombre.innerHTML = "* Introduzca un nombre, por favor";
        spanErrorNombre.className = "error";
        entradaNombre.className = "borderror";
        return false;
    } else {
        spanErrorNombre.className = "noError";
        entradaNombre.className = "noborderror";
        // alert("Formulario enviado correctamente");
        // document.formulario1.submit();
        return true;
    }
}

function validarCorreo() {
    let correoUsuario = document.querySelector("#correo").value;
    let entradaCorreo = document.querySelector("#correo");
    let spanErrorCorreo = document.querySelector("#correoError");
    if (
        /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(correoUsuario)
    ) {
        spanErrorCorreo.className = "noError";
        entradaCorreo.className = "noborderror";
        // alert("Formulario enviado correctamente");
        // document.formulario1.submit();
        return true;
    } else {
        spanErrorCorreo.innerHTML = "* El correo facilitado no es válido";
        spanErrorCorreo.className = "error";
        entradaCorreo.className = "borderror";
        return false;
    }
}

function validarTelefono() {
    let telefonoUsuario = document.querySelector("#telefono").value;
    let entrada = document.querySelector("#telefono");
    let spanError = document.querySelector("#telefonoError");
    if (!/^\d{9}$/.test(telefonoUsuario)) {
        spanError.innerHTML = "* El teléfono introducido no es válido";
        spanError.className = "error";
        entrada.className = "borderror";
        return false;
    } else {
        spanError.className = "noError";
        entrada.className = "noborderror";
        // alert("Formulario enviado con éxito");
        // document.formulario1.submit();
        return true;
    }
}

function validarRadio() {
    let noticias = document.getElementsByName("noticia");
    let spanError = document.querySelector("#noticiaError");
    let seleccion = false;
    // if (document.querySelector('input[name="noticia"]:checked')) {
    //     seleccion = true;
    //     spanError.className = "noError";
    //     alert("Formulario enviado con éxito");
    //     document.formulario1.submit();
    //     return true;
    // }
    // if (!document.querySelector('input[name="noticia"]:checked')) {
    //     // alert("Error, rellena el campo horario");
    //     spanError.className = "error";
    //     spanError.innerHTML = "Seleccione una opcion";
    //     return false;
    // }
    for (i = 0; i < noticias.length; i++) {
        if (noticias[i].checked) {
            spanError.className = "noError";
            seleccion = true;
            // alert("Formulario enviado con éxito");
            // document.formulario1.submit();
            return true;
            break;
        }
    }
    if (!seleccion) {
        spanError.innerHTML = "*Debe seleccionar una opción";
        spanError.className = "error";
        return false;
    }
}

function validarProvincia() {
    let opciones = document.querySelector("#provincia").selectedIndex;
    let spanError = document.querySelector("#provinciaError");
    if (opciones == null || opciones == 0) {
        spanError.innerHTML = "Debe seleccionar una província";
        spanError.className = "error";
        return false;
    } else {
        spanError.className = "noError";
        // alert("Formulario enviado con éxito");
        return true;
    }
}

function validarPoliticaPrivacidad() {
    let politicaPrivacidad = document.querySelector("#condiciones");
    let spanError = document.querySelector("#politicaError");
    if (!politicaPrivacidad.checked) {
        spanError.innerHTML = "* Debe acepta la política de privacidad";
        spanError.className = "error";
        return false;
    } else {
        spanError.className = "noError";
        // alert("Formulario ennviado con éxito");
        // document.formulario1.submit();
        return true;
    }
}
