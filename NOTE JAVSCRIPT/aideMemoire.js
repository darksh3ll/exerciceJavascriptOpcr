//Math.PI => renvoie le nombes PI soit 3.14
console.log("Math.pi");
const pi = Math.PI;
console.log(pi);

//Math.pow => Renvoie le carré d'un nombres
console.log("Math.pow ");
const carre = Math.pow(2,2); //Carré de 2
console.log(carre);

console.log("toFixed");
//to fixed => décimal aprés la virgules
console.log(pi.toFixed(2)); //Renvoie 2 décimales aprés la virgules

//Math.min
console.log("Math.Min");
//Math.min => renvoie le minimun\
console.log(Math.min(12,36,5,1));

//Desctructering
console.log("Destructuring");
const arr = [12,14,2,8,6,3,1,0];
console.log(Math.min(...arr));