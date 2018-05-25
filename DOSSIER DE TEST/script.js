const tableau = [5,8];
let result = [];
let parametres = 0;
for ( let i = 0; i < tableau.length; i++ ) {
    if (tableau[i] >= parametres ) {
        result.push(tableau[i]);
    }
}
console.log(result);


