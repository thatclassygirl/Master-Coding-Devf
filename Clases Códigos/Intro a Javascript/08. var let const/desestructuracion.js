// Creación de nuestro objeto
const superheroe = {
    nombre: "Iron Man",
    edad: 29,
    peso: 100,
    empresa: "Marvel"
}

// De esta manera implementamos la desestructuración
const {nombre, edad, peso, empresa} = superheroe;
console.log(`${nombre} tiene ${edad} años, pesa ${peso} kg y pertenece a ${empresa}`)

// Esto no es una destructuración
// Forma no desestructurada
/*
const nombre = superheroe.nombre;
const edad = superheroe.edad;
const peso = superheroe.peso;
const empresa = superheroe.empresa;

console.log(`${this.nombre} tiene ${this.edad} años, pesa ${this.peso} kg y pertenece a ${this.empresa}`)
*/