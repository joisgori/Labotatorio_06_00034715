

function sumaExtremosArreglo (arreglo) {
    var cuentas = 0;
    var sumas = 0;
    var i = 1;
    arreglo.forEach((nume, index) => {
        /*console.log("Índice " + index + ": " + nume);*/
        console.log(arreglo[index] + arreglo[arreglo.length - i])
        i++;
    });
    return cuentas;
}