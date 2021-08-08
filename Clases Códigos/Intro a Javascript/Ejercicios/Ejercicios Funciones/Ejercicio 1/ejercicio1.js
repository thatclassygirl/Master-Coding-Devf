/*--------------------------------------------------------
| 1.- Hacer una función que convierta de grados   |
|   centígrados a Farenheit                                        |
-----------------------------------------------------------*/
/*
Ejemplo: convierte 37º C a Fahrenheit.
Multiplica los grados Centígrados por 9/5.
Súmale 32º para adaptar el equivalente en la escala Fahrenheit.
                                                      */

document.write("Ejercicio 1 - Convierte grados Centigrados a Farenheit")
document.write("<br>")

function gradosFarenheit (){
    var gradosCentigrados = prompt("Convierte grados Centigrados a Farenheit. Ingresa cantidad de grados Centigrados")
    var convertidorF = (gradosCentigrados * 9/5) + 32;
    document.write(`${gradosCentigrados} grados Centigrados equivale a ${convertidorF} grados Farenheit`)
}
gradosFarenheit();

document.write("<br><br>")