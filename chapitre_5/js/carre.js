/* 
Exercice : fonction carré d'un nombre
*/

// Renvoie le carré d'un nombre
function carre(i) {
    return i*i
}

for ( let i = 0; i <= 5; i++ ) {
    console.log(carre(i+1));
}
