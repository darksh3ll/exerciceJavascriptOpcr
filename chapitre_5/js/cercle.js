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
const number = 5 ;
console.log(`le périmetre de ${number} est de ${perimetreCircle(number).toFixed(2)} avec une aire de ${aireCircle(number).toFixed(2)} Cm2 `);
