window.onload = function() {
    const casillaNegrita = document.getElementById("casillaNegrita");
    const casillaCursiva = document.getElementById("casillaCursiva");
    const parrafoConEstiloVariable = document.getElementById("parrafoConEstiloVariable");

    casillaNegrita.addEventListener("change", function () {
      parrafoConEstiloVariable.style.fontWeight = casillaNegrita.checked ? "bold" : "normal";
    });

    casillaCursiva.addEventListener("change", function () {
      parrafoConEstiloVariable.style.fontStyle = casillaCursiva.checked ? "italic" : "normal";
    });
}