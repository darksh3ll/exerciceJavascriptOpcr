/*
Exercice : périmètre et aire d'un cercle
*/

// Renvoie le périmètre d'un cercle
function perimetreCircle(x) {
    return (x*2) * Math.PI;
}

function aireCircle(x) {
    return Math.PI * Math.pow(x,2);
}
const number = 2.5 ;
console.log(`le périmetre de ${number} est de ${perimetreCircle(number).toFixed(2)} avec une aire de ${aireCircle(number).toFixed(2)} Cm2 `);

//Formule calcul périmetre d`un cercle
// (Rayon * 2) * 3.14 => Ex: 5*2 = 10 * 3.14 = 31.4

//Formules calcul air d`un cercle
// 3.14 * rayon au carré

