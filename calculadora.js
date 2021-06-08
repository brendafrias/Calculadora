const suma = require('./sumar');
const resta = require('./restar');
const multiplicacion = require('./multiplicar');
const division = require('./dividir');
let numeroUno = 6;
let numeroDos = 10;

console.log(suma.sumar(numeroUno,numeroDos));
console.log(resta.restar(numeroUno,numeroDos));
console.log(multiplicacion.multiplicar(numeroUno,numeroDos));
console.log(multiplicacion.multiplicar(numeroUno,0));
console.log(division.dividir(numeroUno,numeroDos));
console.log(division.dividir(numeroUno,0));