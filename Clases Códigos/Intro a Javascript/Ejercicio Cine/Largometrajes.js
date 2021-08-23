// Clase PADRE
class Largometraje{
    constructor(titulo, duracion) {
        this.titulo = titulo;
        this.duracion = duracion;
    }
// Metodos (GET)
    getTitle() {
        return this.titulo
    }

    getDuration() {
        return this.duracion
    }
}

//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
export {Largometraje};