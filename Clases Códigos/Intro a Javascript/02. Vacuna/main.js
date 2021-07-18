/* 
Para que yo me pueda vacunar, necesito cumplir alguno de los siguientes requisitos:
1) Mayores de 18 años que residen en un municipio fronterizo del Norte del país.
2) Embarazadas mayores de 18 años con más de 9 semanas de gestación.
3) Personas que cumplen 30 años o más este año.
*/

// Paso #1: Definir las variables que necesitamos
var edad = parseInt(prompt("¿Qué edad tienes?"));
var fronterizo = prompt("¿Vives en una ciudad fronteriza del Norte del País? - si o no").toLowerCase();
var embarazada = prompt("¿Estás embarazada? si o no").toLowerCase();
var semanasGestacion = parseInt(prompt("En caso de estar embarazada, ¿cuántos meses tieness? Si no es el caso, contesta cero"));

// Paso #2: Validar la primera condición
if (edad >= 18 && fronterizo == "ai"){
    document.write("Si te puedes vacunar, por ser mayor de 18 años y vivir en un municipio fronterizo del Norte");
} else if (edad >= 18 && embarazada == "si" && semanasGestacion >=9){
    document.write("Si te puedes vacunar, por estar embarazada y con 9 o más semanas de gestación");
} else if (edad >= 30){
    document.write("Si te puedes vacunar, por tener 30 años o más");
} else {
    document.write("Lo sentimos, aún no te puedes vaunar, espera próximos avisos");
}