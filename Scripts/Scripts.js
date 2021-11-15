
function calcularSuperficie(ancho, alto) {
    var resultado = ancho * alto;
    return resultado;
  }
  function calcularTerreno() {
    var inputAncho = prompt("Ingresar ancho del terreno en metros");
    var inputAlto = prompt("Ingresar alto del terreno en metros");
    var superficieTerreno = calcularSuperficie(inputAncho, inputAlto);
    alert("La superficie del terreno es:" + superficieTerreno);
  }
    calcularTerreno();