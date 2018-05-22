/* 
Exercice : afficher le jour suivant
*/
var joursSuivant =  prompt("Quelles jours sommes nous");
switch (joursSuivant) {
    case "lundi":
        alert("Demain mardi")
        break;
    case "mardi":
        alert("Demain Mercredi")
        break;
    case "mercredi":
        alert("Demain jeudi")
        break;
    case "jeudi":
        alert("Demain vendredi")
        break;
    case "vendredi":
        alert("Demain samedi")
        break;
    case "samedi":
        alert("Demain dimanche")
        break;
    case "dimanche":
        alert("Demain Lundi")
        break;
    default:
    alert("J'ai dit quelles jours sommes nous je le repeterais pas 2 fois")

}
