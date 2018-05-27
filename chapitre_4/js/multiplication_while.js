/* 
Exercice : table de multiplication
*/

const saisie = 5;
let compteur = 1;
if ((saisie >=2) && (saisie <= 9)) {
    while (compteur <= 10) {
        console.log(`${saisie} x ${compteur} = ${saisie*compteur} `);
        compteur++;
}
}else {
    console.log(`${saisie} n'est pas compris entre 2 et 9`);
}