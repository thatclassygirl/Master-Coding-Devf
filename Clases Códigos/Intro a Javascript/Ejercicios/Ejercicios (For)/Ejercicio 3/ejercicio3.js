//Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.
document.write("Elementos tipo numero en Arreglo [4,”dos”,8,”tres”,5,9,1,”cero”]");
document.write("<br>");

var array = [4,"dos",8,"tres",5,9,1,"cero"];

for (var index = 0; index < array.length; index++) {
    var element = array[index];
    if(typeof element == "number"){
        document.write(`${element}<br>`);
    }
}