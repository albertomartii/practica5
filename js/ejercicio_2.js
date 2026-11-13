window.onload = function() {
    const listaDeColores = document.getElementById("listaDeColores");
    const parrafoQueCambiaDeColor = document.getElementById("parrafoQueCambiaDeColor");

    function aplicarColorSeleccionadoAlParrafo() {
        parrafoQueCambiaDeColor.style.color = listaDeColores.value;
    }

    listaDeColores.addEventListener("change", aplicarColorSeleccionadoAlParrafo);
    aplicarColorSeleccionadoAlParrafo(); // aplica el color inicial al cargar
}