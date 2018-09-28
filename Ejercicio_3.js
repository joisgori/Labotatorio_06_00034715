

function tipado(arreglo) {
    var cuentas = 0;
    var arregloR = [];
    arreglo.forEach((nume, index) => {
        /*console.log(arregloR.push(typeof arreglo[index]));*/
        arregloR.push(typeof arreglo[index])
    });

    var numeros = 0;
    var cadenas = 0;
    var booleanos = 0;
    var sinDefinir = 0;
    var nulo = 0;
    arregloR.forEach((loQueTenga, index) => {
        if (loQueTenga == "undefined") {
            sinDefinir += 1;
            
        } else if (loQueTenga == "number") {
            numeros += 1;
            
        } else if (loQueTenga == "boolean") {
            booleanos += 1;
            
        } else if (loQueTenga == "object") {
            nulo += 1;
            
        } else if (loQueTenga == "string") {
            cadenas += 1;
            
        }

    });
    console.log(`El arreglo tiene ${sinDefinir} elementos sin definir`);
    console.log(`El arreglo tiene ${numeros} elementos de tipo número`);
    console.log(`El arreglo tiene ${booleanos} elementos booleanos`);
    console.log(`El arreglo tiene ${nulo} elementos nulos`);
    console.log(`El arreglo tiene ${cadenas} elementos de tipo cadenas`);

    return arregloR;
}


