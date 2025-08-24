let readline = require ("readline-sync");

let nome = readline.question("Qual é o seu nome?");
console.log(`oi, ${nome}`);

let numero = 2
let fruta= "abacaxi"

if (numero >= 3 && fruta == "abacaxi"){
    console.log ("aprovado")
}else{
    console.log ("reprovado")
}