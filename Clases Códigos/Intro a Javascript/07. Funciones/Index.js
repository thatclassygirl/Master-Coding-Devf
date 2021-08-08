// Hoisting (Declaración correcta de variables)
// Declaro mi variable --> var nombre;
/* var nombre = "JUAN"; // Asignando un valor a esa variable
console.log(nombre) */


        /* Ejemplos de Clase */
/* -----------------------------------------
| Hacer una función que sume dos números   |
| y me retorne la suma de esos dos números |
--------------------------------------------*/

// Con parametros
/* function Suma(num1 , num2) {
    // Todo esto es mi bloque de código
    // Alcance (Scope) local
    var total = num1 + num2 ;
    console.log("LA SUMA ES: " + total)
    //return "LA SUMA ES: " + total
}
Suma( 2 , 2 ) */

// Sin Parametros
// Alcance (scope) global
/* var x = parseInt(prompt("PORFAVOR INGRESA EL PRIMER NÚMERO"))
var y = parseInt(prompt("PORFAVOR INGRESA EL SEGUNDO NÚMERO"))

function Sumar() {
    var total = x + y;
    console.log("LA SUMA ES: " + total)
}
Sumar() */


/*-------------------------------------------
| Hacer una función que pida a un usuario su   |
| edad y saber si es mayor o menor de edad, si |
| el usuario ingresa un valor no válido,       |
| imprimir una advertencia.                    |
----------------------------------------------*/

// Declarar función
// Variable local
// El usuario debe ingresar su edad
// Usar condicionales
// llamar a mi función

// Declaración de funciones
function MayorEdad() { // Bloque de Código
    var edad = prompt ("HOLA, PORFAVOR INGRESA TU EDAD")
    if (edad >= 18) {
        console.log("ERES MAYOR DE EDAD")
    } else if (edad < 18) {
        console.log("ERES MENOR DE EDAD")
    } else {
        console.log("ESTO NO ES UNA EDAD VALIDA")
    }
}
MayorEdad()

// Expresión de funciones
/* var estudiante = funcion() {

} */