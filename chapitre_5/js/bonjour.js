/*
Exercice : fonction bonjour avec saisies utilisateur
*/

//Renvoie un message de bienvenue

const nom       = prompt("Entrez votre nom");
const prenom    = prompt("entrez votre prenom");

function direBonjour(nom,prenom) {
    return `bonjour ${prenom} ${nom}`
}

alert(direBonjour(nom,prenom));