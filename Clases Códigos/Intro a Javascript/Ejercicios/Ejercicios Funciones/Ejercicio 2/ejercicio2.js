/*-----------------------------------------------
|2.- Hacer una función que muestre la tabla de |
| multiplicar de un número                     |
------------------------------------------------*/

function multiplicador() {
    var userNumber = parseInt(prompt("Porfavor introduce un número"))

    for (var i = 1; i <= 10; i++) {
        multiplicador = userNumber * i;
        console.log(`La tabla de multiplicar de ${userNumber} es: ${i} * ${userNumber} = ${multiplicador}`);
    }
}

multiplicador()