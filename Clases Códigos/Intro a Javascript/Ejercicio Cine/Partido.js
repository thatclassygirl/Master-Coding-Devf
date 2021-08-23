// Hacemos import de nuestra clase Largometraje
import {Largometraje} from './Largometrajes.js';

class Partido extends Largometraje {
    constructor(titulo, duracion, equipo) {
        super(titulo, duracion);
        this.equipo = equipo;
    }

    // Metodo (GET)
    getTeam() {
        return this.equipo
    }
}

//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
export {Partido};