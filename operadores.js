alert("Bienvenido al restaurante esta es tu cuenta");
var num1 = parseInt(prompt("Costo de entrada"));
var num2 = parseInt(prompt("Costo de plato principal"));
var num3 = parseInt(prompt("Costo de postre"));
alert("Para poder observar los resultados, debes presionar F12 y visializar la consola");
//Operaciones
var suma = num1 + num2 + num3;
var multiplicacion = suma * 0.18;
var total = suma + multiplicacion;
//Mostrar Resultados
console.log("El costo de la entrada es: " + num1);
console.log("El costo del plato principal es: " + num2);
console.log("El costo del postre es: " + num3);
console.log("El costo total es: " + suma);
console.log("El costo total con IGV es: " + total);