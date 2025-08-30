
let numeros = [2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i]; 
    console.log("Tabuada do " + num);

    for (let mult = 1; mult <= 10; mult++) {
        let resultado = num * mult;
        console.log(num + " x " + mult + " = " + resultado);
    }

    console.log(""); 
}
