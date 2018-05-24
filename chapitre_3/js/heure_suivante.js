/* 
Exercice : afficher l'heure une seconde plus tard
*/

let heures   = 12;
let minutes  = 59;
let secondes = 59;

if ((heures >= 0) && (heures <= 23) && (minutes >=0) && (minutes <=59) && (secondes >=0) && (secondes <=59)) {
    secondes++;
    if (secondes === 59) {
        secondes=0;
        minutes++;
        if (minutes===60) {
            
        }
    }
}