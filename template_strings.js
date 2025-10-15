//Plantillas de cadena de texto

const name = "Jose Luis M.Q";
const age = 25;

const message = `Hola mi mombre es: ${name} y tengo ${age} años` 
console.log(message); 

const parrafo =`
    este parrafo tiene 
    multilineas`
console.log(parrafo)

//Cadena de texto
const a = 5;
const b = 10;
const result = `La suma de ${a} y ${b} es igual a ${a+b}`;
console.log(result);

//Funciones JS
function obtenerSaludo(nombre){
    return `Hola ${nombre}`
}
const persona = "Maria";
const saludo = obtenerSaludo(persona);
console.log(saludo)