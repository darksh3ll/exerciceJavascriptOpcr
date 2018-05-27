/* 
Exercice : contrôle de saisie
*/
let num = Number(prompt("Entrez un chiffres entres 50 et 100 "));
while ((num < 50) || (num > 100)) {
        num = Number(prompt( num + " "  + "n'est pas compris entre 50 et 100"));
}
alert("bravo ton dernier chiffres etait" + " " + num);