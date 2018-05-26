//Variables de base de calcul
const distance = 20000; //Entrez la distance en km de votre destination
const vitesse = 300000; //Entrez votre vitesse de croisiere

//Calcul fondamental
const tempsParcours = distance/vitesse*60;//temps parcours  minutes
const allerRetour = 60/tempsParcours
console.log(`durer ${tempsParcours} seconde et ${allerRetour} Aller Retour en 1 secondes`)

