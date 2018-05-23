/* 
Exercice : afficher le nombre de jours d'un mois
*/

const numeroMois = Number(prompt("Entrez le numero d'un mois au hasard"));

switch (numeroMois) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("mois a 31 jours");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert("mois a 30 jours");
        break;
    case 2:
        alert("mois a 28 jours");
        break;
    default:
        alert("Mois non reconnues")
}

