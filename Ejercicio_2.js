

function sumYprom (arreglo) {
    var suma = 0;
    var prom = 0;
    var tam = arreglo.length;
    arreglo.forEach((nume, index) => {
        suma = suma + nume;
    });
    /*console.log("La suma total los números de su arreglo es: " + suma);*/
    prom = suma / tam;
    return `La suma total los números de su arreglo es: ${suma} y el promedio es: ${prom}`;
}