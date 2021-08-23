//HACEMOS IMPORT DE NUESTRA CLASE LARGOMETRAJE
import {Largometraje} from './Largometrajes.js';

// Subclase Documental
class Documental extends Largometraje{
    constructor(titulo, duracion, autor) {
        super(titulo, duracion); // Indica que atributos de mi clase padre va a heredar
        this.autor = autor;
    }

    // Metodos (GET)
    getAuthor() {
        return this.autor
    }
}

//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
//Usando la forma definida por ES6
export {Documental};