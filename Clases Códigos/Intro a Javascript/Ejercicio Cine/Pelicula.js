// Hacemos import de nuestra clase Largometraje
import {Largometraje} from './Largometrajes.js';

// Subclase
class Pelicula extends Largometraje {
    constructor(titulo, duracion, genero) {
        super(titulo, duracion)
        this.genero = genero;
    }

// Metodo (GET)
    getGender() {
        return this.genero
    }
}

//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
export {Pelicula};