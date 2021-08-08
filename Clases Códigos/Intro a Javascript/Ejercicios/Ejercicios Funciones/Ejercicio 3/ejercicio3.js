/* ---------------------------------------------
|3.- Escribe una función que imprima todos   |
|     los números naturales de 1 hasta n     |
--------------------------------------------- */

document.write("Ejercicio 3 - Numeros Naturales")
document.write("<br>")

function numNaturales(numUser) {
    i = 1;
    while(i <= numUser) {
        document.write(i + "<br>")
        i++;
    }
}

numUser = prompt("Ingresa hasta que número se contara: ");
numNaturales(numUser);

document.write("<br><br>")