const tableau = [60,60,23,80];
let result = [];
for ( let i = 0; i < tableau.length; i++ ) {
    result.push(tableau[i]);
    if (result[0] < tableau[i]) {
        result.pop();
    }

}
console.log(result);


