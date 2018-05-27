/* 
Exercice : table de multiplication
*/
let num = 9 ;
let compteur = 20;
if ((num >= 2) && (num <= 9)) {
    for ( let i = 1; i <= compteur ; i++ ) {
        console.log(`${i} X ${num} = ${num*i}`);
    }
}else {
    console.log(`${num} est pas compris entre 2 et 9`);
}
