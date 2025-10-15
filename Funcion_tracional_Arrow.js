//Funcion tradicional
function saludar(nombre){
    return "Hola" + " "+ nombre+ " " + "!";
}
//Arrow funcion equivalente
const saludarArrow = (nombre, apllido) => "Hola"+ " " + nombre + " " + apllido + "!";

console.log(saludar("Jose Luis"));
console.log(saludarArrow("Maria","Zavala"));

//Funcion con Parametro Equivalente
const sumarArrow = (a,b) => a + b;
console.log(sumarArrow(5,8));

//Funcion tradicional con parametros
function sumar (a,b){
    return  a + b;
}
console.log(sumar(5,3));

//Funcion dentro de un MAP(es un nuevo array)
const numbers = [1,3,2,27,2,5,7];
const cuadrados = numbers.map(function(number){
    return number * number;
});
console.log(cuadrados);
//Funcion Arrow dentro de un MAP
const cuadradosArrow = numbers.map(number => number*number);
console.log(cuadradosArrow)
//Ejemplos donde NO se deberian usar Arrow funtions
//Evitar usar Arrow cuando con objetos literales(objeto cuyas propiedades están declaradas textualmente en el código) y al usar this
const object = {
    valor : 42,
    obtener_valor: function(){
        return this.obtener_valor;
    }, 
} 
console.log(object);