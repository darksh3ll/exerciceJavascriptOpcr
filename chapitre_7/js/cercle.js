/*
Exercice : objet cercle
*/

const r = Number(prompt("Entrez le rayon d'un cercle :"));

const cercle = {
    rayon : r,

    // renvoie le périmetre d'un cercle
    perimetre:function () {
        return 2 * this.rayon * Math.PI;
    },

    // renvoie l'air du cercle
    aire:function() {
        return this.rayon * this.rayon * Math.PI;

    }
}


console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());