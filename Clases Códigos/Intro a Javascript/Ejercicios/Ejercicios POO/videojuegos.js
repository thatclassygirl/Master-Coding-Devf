// Programación orientada a objetos
// Vamos a tener una clase para las consolas
// Crear nuestra plantilla
// Crear nuestro constructor
// Solo podemos usar un constructor por clase
class Consola {
    constructor (nombre, videojuegos, disponibilidad, precio) {
        this.nombre = nombre;
        this.videojuegos = videojuegos;
        this.disponibilidad = disponibilidad;
        this.precio = precio;
    }
// Los métodos usualmente necesitan hacer algo con lo que fue llamado nuestro objeto
// Métodos
// Vamos a simular un pequeño sistema para saber si están aprobados o reprobados
    Disponible() {
        if(this.disponibilidad){
            return (`La consola ${this.nombre} esta disponible actualmente. Por un precio de ${this.precio}`)
        }else{
            return (`La consola ${this.nombre} no esta disponible actualmentes`)
        }
    }

    Incluye() {
        if(this.disponibilidad){
            return (`La consola ${this.nombre} incluye los juegos ${this.videojuegos[0]}, ${this.videojuegos[1]} y ${this.videojuegos[2]}`)
        }else {
            return (`Me encantaria decirte que juegos se incluyen, pero la consola no se encuentra disponible`)
        }
    }
}

let xboxOne = new Consola("Xbox One", ["Dark Souls III", "Forza Horizon 4", "Lyers of Fear"], true, "200")
let xboxSeriesX = new Consola("Xbox Series X", ["Black Desert Online", "Call of Duty", "Halo"], false, "500")
let xboxSeroesS = new Consola("Xbox Series S", ["Skyrim", "The Witcher 3", "Outlast"], true, "300")

// Para ver disponibilidad y juegos que incluye en consola se llama a la clase con xboxOne.Disponible() o xboxOne.Incluye()