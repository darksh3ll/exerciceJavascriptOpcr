/*
 Exercice : analyse d'un mot
*/
function nbVoyelles(mot) {
    mot.toLowerCase();
    let compteurVoyelle = 0 ;
    let compteurConsonnes = 0;
    for ( let i = 0; i < mot.length; i++ ) {
        switch (mot[i]) {
            case "a":
                compteurVoyelle ++ ;
                break;
            case "o":
                compteurVoyelle ++ ;
                break;
            case "i":
                compteurVoyelle ++ ;
                break;
            case "e":
                compteurVoyelle ++ ;
                break ;
            case "u":
                compteurVoyelle ++ ;
                break ;
            case "y":
                compteurVoyelle ++ ;
                break ;
            default:
                compteurConsonnes ++ ;
                break;


        }
    }
    return `Il contient ${compteurVoyelle} voyelles et ${compteurConsonnes} Consonnes`;
}
function motInverser(mot) {
    let inverse = "";
    for ( let i = 0; i < mot.length; i++ ) {
        inverse = mot[i] + inverse;
    }
    return `Il s'écrit a l'envers ${inverse}`;

}
const mot = "gerard";
const longueurMot = mot.length;
const motMinuscules = mot.toLowerCase();
const motMajuscules = mot.toUpperCase();
console.log(`le mot ${mot} contient ${longueurMot} caractéres`);
console.log(`Il s'écrit en minuscules ${motMinuscules}`);
console.log(`Il s'écrit en majuscules ${motMajuscules}`);
console.log(nbVoyelles("mot"));
console.log(motInverser("mot"));
