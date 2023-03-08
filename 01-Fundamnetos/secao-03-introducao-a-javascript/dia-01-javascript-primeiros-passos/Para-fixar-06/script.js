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
// 02
let valorA = 38;
let valorB = 40;

if(valorA > valorB){
   console.log('valorA é maior que o ValorB');
}else {
    console.log('valorB é maior que o ValorA');
}
// 03
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
//04
let numero = -12;
if (numero > 0){
    console.log('positive');
} else if(numero < 0){
    console.log('negative');
} else{
    console.log('zero');
}

//05
let angulo1 = 60;
let angulo2 = 0;
let angulo3 = 30;

if (angulo1 <= 0 && angulo2 <= 0 && angulo3 <= 0){
    console.log('Erro:Inválido');
}else if (angulo1 + angulo2 + angulo3 === 180) {
    console.log(true);
} else{
    console.log(false);
}

//06
let peça = 'Rainha'

switch (peça) {
    case 'Rei':
        console.log('O rei pode mover-se em todas as direções (horizontal, vertical e diagonal)somente uma casa de cada vez');
        break;
    case 'Rainha':    
        console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças');
        break;
    case 'Bispo':
        console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças.');  
        break;  
    case 'Cavalo':
        console.log('É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L” duas casas em sentido horizontal e mais uma na vertical ou vice-versa.');
        break;
    case 'Torre':
        console.log('A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças'); 
        break;   
    case 'Peão':
        console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal.'); 
        break;
    default:
        console.log('Peça Inválida');    
}   

// 07

 let notaDada = 100;

   if(notaDada >= 100)
   console.log('A');
    else if (notaDada >= 90) {
      console.log('B');
   } else if (notaDada >= 80) {
      console.log('C');
   } else if (notaDada >= 70){
      console.log('D');
   } else if (notaDada >= 60){
     console.log('E');
   }else {
     console.log('F');
   }

// 08
   let nu1 = 1
   let nu2 = 8
   let nu3 = 15

   if (nu1 % 2 === 0 || nu2 % 2 === 0 || nu3 % 2 === 0){ 
     console.log(true);
   } else {
      console.log(false);
   }

// 09
  let nuA = 6  
  let nuB = 2 
  let nuC = 8

  if (nuA % 2 !== 0 || nuB % 2 !== 0 || nuC % 2 !== 0) {
     console.log(true); 
  } else {
     console.log(false);
  }

 // 10
 
let oCustoDeUmProduto = 100;
let  valorDeVenda = 150;

if (oCustoDeUmProduto >= 0 && valorDeVenda >= 0) {
    let total = oCustoDeUmProduto * 1.2;
    let total2= (valorDeVenda - total) * 1000;
        console.log(total2);
}

// 11

let descontosINSS;
let descontosIR;
let meuSalarioBruto = 5000.00;

if (meuSalarioBruto <= 1556.92){
   descontosINSS = meuSalarioBruto * 0.08
}else if (meuSalarioBruto <= 2594.92){
    descontosINSS = meuSalarioBruto * 0.09
}else if (meuSalarioBruto <= 5189.82){
    descontosINSS = meuSalarioBruto * 0.11
}else {
    descontosINSS = 570.88
}
let salary = meuSalarioBruto - descontosINSS ;

      if (salary <= 1903.98){  
 }else if (salary <= 2826.65){
    descontosIR = salary * 0.075 - 142.80;
 }else if (salary <= 3751.05){
     descontosIR = salary * 0.15 - 354.80;
 }else if (salary <= 4664.68){
     descontosIR = salary * 0.225 - 636.13;
 }else {
     descontosIR = salary * 0.275 - 869.36;
 }

 console.log("salário líquido:" + (salary - descontosIR))





