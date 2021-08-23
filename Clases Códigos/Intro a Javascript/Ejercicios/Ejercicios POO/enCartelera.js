// Programación orientada a objetos
// Vamos a tener una clase de Cartelera
// Crear nuestra plantilla
// Crear nuestro constructor
// Solo podemos usar un constructor por clase
class enCartelera {
    constructor (pelicula, sala, clasificación, boletos) {
        this.pelicula = pelicula;
        this.sala = sala;
        this.clasificación = clasificación;
        this.boletos = boletos;
    }
// Los métodos usualmente necesitan hacer algo con lo que fue llamado nuestro objeto
// Métodos
// Vamos a simular un pequeño sistema para saber si aún hay boletos para las diferentes peliculas
    boletosDisponibles() {
        if(this.boletos === true){
            return "\n Aún hay cupos disponibles! Disfruta la función!"
        }else if(this.boletos === false){
            return "\n No hay cupos disponibles. Lo sentimos."
        }else{
            return "ERROR EN EL SISTEMA, CONSULTAR MÁS TARDE"
        }
    }
}

// Creación de nuestros objetos
const peliculaUno = new enCartelera("Titanic", 3, "B", true)
const peliculaDos = new enCartelera("Avatar", 5, "A", false)
const peliculaTres = new enCartelera("Insidious", "IMAX", "B15", true)

console.log(peliculaUno.pelicula, peliculaUno.sala, peliculaUno.clasificación, peliculaUno.boletosDisponibles())
console.log(peliculaDos.pelicula, peliculaDos.sala, peliculaDos.clasificación, peliculaDos.boletosDisponibles())
console.log(peliculaTres.pelicula, peliculaTres.sala, peliculaTres.clasificación, peliculaTres.boletosDisponibles())
