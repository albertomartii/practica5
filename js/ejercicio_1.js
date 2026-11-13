window.addEventListener("load", function () {
    const formularioPrincipal = document.querySelector("form");
    const campoNombre = document.getElementById("nombre");
    const campoTelefono = document.getElementById("telefono");
    const campoDni = document.getElementById("dni");
    const listaAficiones = document.getElementById("aficion");
    const campoObservaciones = document.getElementById("observaciones");

    // 1. l cargarse el formulario establecer el foco en el cuadro de texto nombre.
    campoNombre.focus();

    

    // 3. Al elegir una opción(evento onchange) nos mostrará un alert con los siguientes datos: longitud de la lista,número del índice seleccionado y el valor del índice.
    listaAficiones.addEventListener("change", function () {
        const longitudDeLaLista = listaAficiones.length;
        const indiceSeleccionado = listaAficiones.selectedIndex;
        const valorSeleccionado = listaAficiones.value;

        alert(
            "La longitud de la lista es " + longitudDeLaLista + "\n" +
            "El índice seleccionado es el " + indiceSeleccionado + "\n" +
            "El valor del índice seleccionado es " + valorSeleccionado
        );
    });
    
    // 4. El campo observaciones(textarea) debe estar limitado a un tamaño de 150 caracteres.
    campoObservaciones.maxLength = 150;
    
    // 5+6. Los botones “Guardar Cambios” y “Borrar datos introducidos” permitirán enviar el formulario y borrar todos los datos(resetear el formulario). - Al enviar el formulario, debemos validar los siguientes campos:
    formularioPrincipal.addEventListener("submit", function (evento) {
        const dniIntroducido = campoDni.value.trim();
        const telefonoIntroducido = campoTelefono.value;
        const expresionNueveDigitosSeguidos = /^[0-9]{9}$/;

        // 6.1 El campo Dni debe ser un campo obligatorio.
        if (dniIntroducido === "") {
            alert("El DNI es obligatorio");
            evento.preventDefault();
            campoDni.focus();
            return;
        }
        // 6.2 El campo Teléfono debe estar formado por nueve dígitos consecutivos y sin espacios ni guiones entre las cifras.
        if (!expresionNueveDigitosSeguidos.test(telefonoIntroducido)) {
            alert("El teléfono debe tener 9 dígitos seguidos, sin espacios ni guiones");
            evento.preventDefault();
            campoTelefono.focus();
        }
    });
});