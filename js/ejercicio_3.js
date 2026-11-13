window.onload = function() {
    const todosLosBotonesRadioDeColor = document.querySelectorAll('input[name="colorDelTexto"]');
    const parrafoQueCambiaDeColor = document.getElementById("parrafoQueCambiaDeColor");

    function aplicarColorDelBotonRadioPulsado(evento) {
      parrafoQueCambiaDeColor.style.color = evento.target.value;
    }

    todosLosBotonesRadioDeColor.forEach(function (botonRadioDeColor) {
      botonRadioDeColor.addEventListener("change", aplicarColorDelBotonRadioPulsado);
    });

    // color inicial según el radio marcado por defecto
    parrafoQueCambiaDeColor.style.color = document.querySelector('input[name="colorDelTexto"]:checked').value;
}