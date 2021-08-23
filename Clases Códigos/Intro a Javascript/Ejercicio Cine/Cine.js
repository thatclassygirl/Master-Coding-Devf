// Importamos nuestras clases
import {Sala} from './Sala.js';
import {Pelicula} from './Pelicula.js';
import {Documental} from './Documental.js';
import {Partido} from './Partido.js';

// Clase Cine
class Cine {
    constructor(sala) {
    this.sala = sala;
    }

// Método 
    reproducir() {
        return this.sala.setMovie()
    }
}

// Instanciar nuestros objetos
// Instanciar objeto pelicula
const titanic = new Pelicula ('TITANIC', '220MIN', 'B')
const Sala1 = new Sala ('1', '250personas', titanic)
const cinepolisGalerias = new Cine (Sala1)

// Instanciar objeto documental
const docum = new Documental ('Black Fish', '130MIN', 'A')
const Sala2 = new Sala ('2', '230personas', docum)
const cinepolisPabellon = new Cine (Sala2)

// Instanciar objeto partido
const partidoFut = new Partido ('Champions', '125MIN', 'A')
const Sala3 = new Sala ('3', '230personas', partidoFut)
const cinemex = new Cine (Sala3)

// Imprimir nuestros objetos de clase
console.log(cinepolisGalerias.reproducir())
console.log(cinepolisPabellon.reproducir())
console.log(cinemex.reproducir())
