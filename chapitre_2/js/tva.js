/* 
Exercice : calculer un prix TTC à partir d'un prix HT
*/

// Saisie du prix hors taxes

const prixHt = Number(prompt("Entrez le prix HT"));
const prixTtc = prixHt*1.2;
const montantTva = Math.round(prixTtc - prixHt);
alert(`le prix TTC est de ${prixTtc} Euros avec une tva de ${montantTva} Euros`);