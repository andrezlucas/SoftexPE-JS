let readline = require ("readline-sync");

let nascimento = readline.question("Quando voce nasceu?");

let ano = (2025);

let suaidade = (ano-nascimento);

console.log ("sua idade é" + suaidade);
if (suaidade>= 18){console.log("tu vai tá preso po")}
else {console.log("tu vai ficar de boa")}