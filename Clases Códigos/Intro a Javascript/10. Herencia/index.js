// Introducción a Herencia
// Herencia simple, donde una subclase puede heredar atributos o métodos de una super clase (clase padre)
// Metodos Get (Getter) Set (Setter)

// El nombre de las clases en MAYUSCULAS
// El nombre de los atributos en minuscula y después con una Mayuscula

// Clase Padre
class Telefono {
    constructor(marca){
        this.marca = marca;
    }

// Método
    getAnuncio() {
        return "Ha llegado el nuevo teléfono de: " + this.marca
    }
}

// Aquí vamos a empezar a trabajar la Herencia
class Modelo extends Telefono {
    constructor(marca, modelo) {
        super(marca)
        this.modelo = modelo;
    }

    // Método
    getAnuncioCompleto() {
        return this.getAnuncio() + "\nEl modelo que llegó es: " + this.modelo
    }
}

// Instanciar objetos
const miTelefono = new Modelo ("XIAOMI", "REDMI NOTE 10 PRO")
console.log(miTelefono.getAnuncioCompleto())
