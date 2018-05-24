/* 
Exercice : afficher l'heure une seconde plus tard
*/

let heures = 9;
let minutes = 59;
let secondes = 59;

if ((heures >= 0) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) && (secondes >= 0) && (secondes <= 59)) {
    secondes++;
    if (secondes === 60) {
        secondes = 0;
        minutes++;
        if (minutes === 60) {
            heures++;
            minutes = 0;
        }
        if (heures === 24) {
            heures = 0;
        }

    }
    console.log("Dans une seconde, il sera " + heures + " heures, " +
        minutes + " minutes et " + secondes + " secondes");
}else {
  console.log("heures incorect");
}

