/* 
Exercice : tournez manège
*/
const saisie =  10;
if ((saisie >= 0) && (saisie <= 50)) {
for (let i = 1; i <= saisie; i++ ) {
    console.log(` WHAOUHHH !!!! C'est le tours numero ${i}`);
}
} else {
    console.log("Entre 0 et 50");
}