/* 
Exercice : comparer deux nombres
*/
const nombres1 = Number(prompt("Entrez un chiffres"));
const nombres2 = Number(prompt("Entrez un chiffres"));

if (nombres1 < nombres2) {
    alert(`${nombres1} est inferieur a ${nombres2}`)
}else if (nombres1 > nombres2) {
    alert(`${nombres1} est superieur a ${nombres2}`)
}else {
    alert(`${nombres1} et ${nombres2} sont egaux`)
}
