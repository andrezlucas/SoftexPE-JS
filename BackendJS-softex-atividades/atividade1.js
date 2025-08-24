//Algumas palavras não possuem acentuação pois no terminal acaba bugando.

let readline = require ("readline-sync") ;

console.log ("------------Formulário de inscrição------------");
console.log("\n");

let seunome = readline.question ("Nome completo:");
console.log("\n");
let cpf = readline.question ("Cpf:");
console.log("\n");
let tele = readline.question ("Numero de telefone/celular:");
console.log("\n");
let email = readline.question ("E-mail:");
console.log("\n");
let dia = readline.question ("Dia de nascimento:");
console.log("\n");
let mes = readline.question ("Mes de nascimento:");
console.log("\n");
let ano = readline.question ("Ano de nascimento:");
let anocalculado = (2025-ano)
console.log("\n");
let profi = readline.question ("Profissao:");
console.log("\n");
let animal = readline.question ("Possui animal? (sim/nao):");
console.log("\n");
let quanani;
if (animal === "sim"){quanani=readline.question ("Quantos animais?:")
console.log("\n")
}else {
    quanani = "Não possui";}

let endereço = readline.question ("Endereco:");
console.log("\n");
let bairro = readline.question ("Bairro:");
console.log("\n");
let cidade = readline.question ("Cidade:");
console.log("\n");


let edemaior;
if (anocalculado >= 18) {
  edemaior = "Sim";
} else {
  edemaior = "Não";
}

console.log(`-----------Formulário de inscrição de ${seunome}-----------`);


console.log ("Nome:"+seunome);
console.log ("Cpf:"+cpf);
console.log ("Número de telefone/celular:"+tele);
console.log ("E-mail:"+email);
console.log("Data de nascimento: " + dia + "/" + mes + "/" + ano);
console.log ("Possui Maioridade?:"+edemaior);
console.log ("Profissão:"+profi);
console.log("Quantos animais:"+quanani);
console.log ("Endereço:"+endereço);
console.log ("Bairro:"+bairro);
console.log ("Cidade:"+cidade);

console.log("-----------------------------------------------------------");



            

