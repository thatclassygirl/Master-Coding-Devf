var edad = window.prompt("INGRESA UNA EDAD")
    if(edad >= 12 & edad < 18) {
        console.log("ERES MENOR DE EDAD");
    } else if(edad >= 18 & edad < 60) {
        console.log("ERES MAYOR DE EDAD");
    } else if(edad >= 60) {
        console.log("ERES UN ADULTO MAYOR")
    } else {
        console.log("EDAD NO VALIDA: " + edad)
    }