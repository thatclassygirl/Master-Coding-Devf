// Construir nuestro primer objeto
    /* let mascota = {
        nombre: "Scott",
        tipo: "canino",
        color: "cafe",
        edad: 5,
        macho: true
    } 

    console.log(mascota.nombre)
    console.log(mascota.edad) */


// Notación de corchetes
    /* let mascota = {
        nombre: "Scott",
        tipo: "canino",
        color: "cafe",
        edad: 5,
        macho: true
    }

    console.log(mascota['nombre'])
    console.log(mascota['edad'])
    console.log(mascota['color']) */

// Métodos en un objeto
    /* let mascota = {
        nombre: "Scott",
        tipo: "canino",
        color: "cafe",
        edad: 5,
        macho: true,
        // Métodos los podemos trabajar con funciones
        // Una pequeña acción que realice ese objeto
        ladrar: function(){
            return(`${this.nombre} puede ladrar`) // Sirve como apuntador
        },
        correr: function(){
            return(`${this.nombre} puede correr muy rápido`)
        }
    } 

    console.log(mascota.ladrar())
    console.log(mascota.correr()) */

// Insertar un valor a nuestro objeto
/* let mascota = {
    nombre: "Scott",
    tipo: "canino",
    color: "cafe",
    edad: 5,
    macho: true,
    // Métodos los podemos trabajar con funciones
    // Una pequeña acción que realice ese objeto
    ladrar: function(){
        return(`${this.nombre} puede ladrar`) // Sirve como apuntador
    },
    correr: function(){
        return(`${this.nombre} puede correr muy rápido`)
    }
}

mascota.tamaño = "Grande";
console.log(mascota) */

// Actualizar un valor de nuestro objeto
// Basta únicamente con sobre escribir una propiedad ya existente
/* let mascota = {
    nombre: "Scott",
    tipo: "canino",
    color: "cafe",
    edad: 5,
    macho: true,
    // Métodos los podemos trabajar con funciones
    // Una pequeña acción que realice ese objeto
    ladrar: function(){
        return(`${this.nombre} puede ladrar`) // Sirve como apuntador
    },
    correr: function(){
        return(`${this.nombre} puede correr muy rápido`)
    }
}

mascota.edad = 8;
console.log(mascota) */

// Eliminar una clave o atributo
let mascota = {
    nombre: "Scott",
    nombrecompleto: "Scott Travis",
    tipo: "canino",
    color: "cafe",
    edad: 5,
    macho: true,
    // Métodos los podemos trabajar con funciones
    // Una pequeña acción que realice ese objeto
    ladrar: function(){
        return(`${this.nombre} puede ladrar`) // Sirve como apuntador
    },
    correr: function(){
        return(`${this.nombre} puede correr muy rápido`)
    }
}

delete mascota.nombrecompleto;
console.log(mascota)