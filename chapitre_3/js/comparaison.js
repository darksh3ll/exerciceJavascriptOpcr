/* 
Exercice : comparer deux nombres
*/

var nbr1 = Number(prompt("Entrez un nombres entres 0 et 10"));
if ((nbr1 >= 0) && (nbr1 < 10)) {
    var nbr2 = Number(prompt("Entrez un deuxieme nombres entres 0 et 10"));
}
if ((nbr2 >= 0) && (nbr2 < 10)) {
    var resultat = nbr1 + nbr2;
    alert(`${nbr1} + ${nbr2} = ${resultat} `)
}
else {
    alert("trop grand");
}



    // Algo
    // l'utilsateur rentre un 1 er nombres
    // si le nombre est compris entre 0 et 10
    // l'utisateur rentre un deuxieme nombres
    // si le deuxieme nombres est compris entre 0 et 10
    // alors on n'affiche le calcul a l'ecran
