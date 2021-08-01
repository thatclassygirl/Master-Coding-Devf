// Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. 
var num = prompt("Por favor ingrese un número");
contador = 0;
var multiplos = [];

while(contador<=num){
    if(contador %5 == 0){
        multiplos.push(contador);
    }
    contador = contador + 1;
}

var pokes = [];
    for (var index = 0; index < multiplos.length; index++) {
        pokes.push(pokemons[multiplos[index]]);
    }

    document.write(`Los siguientes pokemon están localizados en posiciones multiplos de 5: ${pokes}`);