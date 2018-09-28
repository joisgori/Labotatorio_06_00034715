

function ocurrencias (num, arreglo) {
    var cuentas = 0;
    arreglo.forEach((nume, index) => {
        /*console.log("Índice " + index + ": " + nume);*/
        if (num == arreglo[index]){
            cuentas += 1;   
        }       
    });
    return cuentas;
}
