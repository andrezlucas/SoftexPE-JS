let a = 1;
let b = -3;
let c = -54;

let delta = ((b*b) - (4*a*c));

console.log (delta);
//uma maneira de fazer

//let bhask1 =(-b+Math.sqrt(delta))/(2*a); 

//let bhask2=(-b-Math.sqrt(delta))/(2*a);

//console. log (bhask1);
//console. log (bhask2);

//outra maneira de ser feito

let bhask3 =(-b+Math.sqrt((b*b)-(4*a*c)))/(2*a);
let bhask4 =(-b-Math.sqrt((b*b)-(4*a*c)))/(2*a);

console.log (bhask3);
console.log (bhask4);  

console.log ("eu estive aqui")