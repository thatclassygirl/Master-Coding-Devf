/*
    P = mgh / t ; Donde:
    P es potencia (KW);
    m es masa (kg)
    g es la gravedad (m/s2)
    h es la altura (m)
    t es el tiempo (s)
*/

// Problema
// Una masa de 40 kg se eleva hasta 20 m en 3 s.
// ¿Qué potencia promedio se ha utilizado?

/* Paso 1: Defino mis variables */
var masa = parseInt(prompt('¿Cuál es la masa? (kg)'));
const gravedad = 9.8;
var altura = parseInt(prompt('¿Cuál es la altura? (m)'));
var tiempo = parseInt(prompt('¿En cuánto tiempo lo hace? (s)'));

/* Paso 2: Realizo la operación */
var potencia = (masa * gravedad * altura) / tiempo;

/* Paso 3: Muestro el resultado */
console.log(potencia);

/* El resultado se ve inspeccionando la consola */