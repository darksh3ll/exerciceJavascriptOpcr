/* 
Exercice : contrôle de saisie
*/
let num = Number(prompt("Entrez un chiffres "));
while (num < 100) {
        num = Number(prompt( num + " "  + "est inferieur a 100 Recommence"));
}
alert("bravo ton dernier chiffres etait" + " " + num);