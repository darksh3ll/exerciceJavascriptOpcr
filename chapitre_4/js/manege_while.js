/* 
Exercice : tournez manège
*/
console.log("cest partie");
let saisie = Number(prompt("Entrez un numero entre 1 et 10"));
if ((saisie > 0) && (saisie <=10)) {
    while (saisie > 0) {
        console.log(`C'est le tours numero ${saisie}`);
        saisie--;
}
}else {
    alert("un chiffre entre 0 et 10");
}
