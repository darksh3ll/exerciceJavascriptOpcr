/* 
Exercice : fonction carré d'un nombre
*/

// Renvoie le carré d'un nombre
function carre(x) {
    console.log(`Tu ma demander d'afficher ${x} nombres Voici le resulat `)
    for (let i = 0; i <= x; i++) {

        console.log(`carre de ${i} = ${i*i}`);
    }

}

carre(25);