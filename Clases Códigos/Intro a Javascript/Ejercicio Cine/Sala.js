// HACEMOS IMPORT DE NUESTRA CLASE LARGOMETRAJE
// import {Largometraje} from './Largometrajes.js';

class Sala {
    constructor(numSala, cantGente, largometraje) {
        this.numSala = numSala;
        this.cantGente = cantGente;
        this.largometraje = largometraje;
    }

// Metodo (SET)
    setMovie() {
        return "Se está reproduciendo: " + this.largometraje.getTitle() + " Duracion " + this.largometraje.getDuration();
    }

// Metodo (GET)
    getPeople() {
        return this.cantGente
    }

    getSalaNumber() {
        return this.numSala
    }

}

// Exportamos nuestra plantilla (código)
export {Sala};