let readline = require ("readline-sync");

//pra deixar o codigo em loop usar o while (true){}
//while (true){
let n1 = readline.question ("escreva o primeiro numero")

let n2 = readline.question ("escreva o segundo numero")

let op = readline.question ("qual o operador? +, -, *, /")

//aqui eu transformei n1 e n2 em numero com o N maiusculo de Number
n1 = Number (n1);
n2 = Number (n2);

let respostamais = (n1 + n2)
let respostamenos = (n1-n2)
let respostamulti = (n1*n2)
let repostadivi = (n1/n2)



switch (op){ 

    case "+":

   console.log (respostamais)

    break;

    case "-":

   console.log (respostamenos)

    break;

    case "*":

   console.log (respostamulti)

    break;

    case "/":

   console.log (respostadivi)

    break;

    default: console.log ("tente outro operador")

    

}

