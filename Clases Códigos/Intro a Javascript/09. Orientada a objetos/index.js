// Crear un objeto
/*
const EstudianteUno = {
    nombre: "Eduardo",
    apellido: "Perez",
    califFinal: 8,
    inscrito: true,
}

// Desestructuración
const {nombre, apellido, califFinal, inscrito} = EstudianteUno;
console.log(`Hola ${nombre} ${apellido} aprobaste la materia, calificación final: ${califFinal}`)
*/

// Programación orientada a objetos
// Vamos a tener dos clases, 1) Estudiantes y 2) Profesores
// Crear nuestra plantilla
// Crear nuestro constructor
// Solo podemos usar un constructor por clase
class Estudiantes {
    constructor (nombre, apellido, califFinal, inscrito) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.califFinal = califFinal;
        this.inscrito = inscrito;
    }
// Los métodos usualmente necesitan hacer algo con lo que fue llamado nuestro objeto
// Métodos
// Vamos a simular un pequeño sistema para saber si están aprobados o reprobados
    Aprobado() {
        if(this.califFinal >= 7.6){
            return "\n Aprobado " + Math.round(this.califFinal)
        }else if(this.califFinal <= 7.5){
            return "\n Reprobado " + Math.round(this.califFinal)
        }else{
            return "ERROR EN EL SISTEMA, CONSULTAR MÁS TARDE"
        }
    }

    Inscrito() {
        if(this.inscrito === true){
            return "\n EL ALUMNO SI ESTÁ INSCRITO EN EL SEMESTRE"
        }else if(this.inscrito === false){
            return "\n EL ALUMNO NO ESTÁ INSCRITO EN EL SEMESTRE"
        }else {
            return "\n ERROR EN EL SISTEMA, CONSULTAR MÁS TARDE"
        }
    }
}

// Creación de nuestros objetos
const EstudianteUno = new Estudiantes("JUAN", "GOMEZ", 8.2, true)
const EstudianteDos = new Estudiantes("ERICK", "RODRIGUEZ", 7.2, false)
const EstudianteTres = new Estudiantes("LUPITA", "GUTIERREZ", 9.2, true)

console.log(EstudianteUno.nombre, EstudianteUno.apellido, EstudianteUno.Aprobado(), EstudianteUno.Inscrito())
console.log(EstudianteDos.nombre, EstudianteDos.apellido, EstudianteDos.Aprobado(), EstudianteDos.Inscrito())
console.log(EstudianteTres.nombre, EstudianteTres.apellido, EstudianteTres.Aprobado(), EstudianteTres.Inscrito())