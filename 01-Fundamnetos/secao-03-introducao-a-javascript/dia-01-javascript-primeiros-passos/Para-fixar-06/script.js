//Exercícios, agora, a prática.
//operadores aritméticos. 

let valor1 = 35;
let valor2 = 12;

console.log('Adição: ' + (valor1 + valor2));
console.log('Subtração: ' + (valor1 - valor2));
console.log('Multiplicação: ' + (valor1 * valor2));
console.log('Divisão: ' + (valor1 / valor2));
console.log('Módulo: ' + (valor1 % valor2));

//lógica condicional 
// 01
let valorA = 38;
let valorB = 40;

if(valorA > valorB){
   console.log('valorA é maior que o ValorB');
}else {
    console.log('valorB é maior que o ValorA');
}
// 02
let a = 10;
let b = 15;
let c = 20;

if(a > b && a > c){
    console.log('maior:' + (a));
}else if (b > c && b > a){
    console.log('maior:' + (b));
} else {
    console.log('maior:' + (c));
}
//03
let numero = -12;
if (numero > 0){
    console.log('positive');
} else if(numero < 0){
    console.log('negative');
} else{
    console.log('zero');
}

//04

let anguloA = 80
let anguloB = 70
let anguloC = 30
let soma = anguloA + anguloB +  anguloC;
let anguloPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

 if(anguloPositivos){
    if(soma === 180){
    console.log(true);
} else {
    console.log(false);
}
} else {
    console.log('Erro:Inválido');
}

//05

let numero1 = 4;
let numero2 = 7;
let numero3 = 11;
let resultado = true;
if ((numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0)) {
  resultado = false;
};
console.log(resultado);
