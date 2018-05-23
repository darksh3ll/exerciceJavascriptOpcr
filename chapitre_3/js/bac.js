/* 
Exercice : trouver le résultat au bac selon la moyenne
*/
const moyenneCandidat = Number(prompt("Entrez la moyenne du candidat"));
if (moyenneCandidat < 10) {
    alert("Candidat recalé")
}else if ((moyenneCandidat >= 10) && (moyenneCandidat <= 12)) {
    alert("Candidat recus mais doit faire des efforts")
}else {
    alert("Candidat recus avec appreciation trés bon eleves")
}
