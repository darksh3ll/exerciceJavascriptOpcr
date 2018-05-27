/* 
Exercice : afficher les nombres pairs et impairs
*/
const saisie = 20;
if ((saisie >= 1) && (saisie <= 20)) {
    for ( let i = 1; i <= saisie; i++ ) {
        if (i % 2 === 0) {
            console.log(`${i} pair`);
        }else {
            console.log(`${i} impair`);
        }
    }
}else {
    console.log("Attention entres 1 et 10 RECOMMENCE!!!!")
}
