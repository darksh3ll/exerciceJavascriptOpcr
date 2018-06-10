/*
Exercice : objet chien
*/

const chient = {
    nom : "laya",
    race: "Berger Allemand",
    taille : 1.31,

    //déscription du chien
    decrire : function () {
        return `${this.nom} est un ${this.race} mesurant ${this.taille} cm`

    },

    aboyer: function () {
        return `${this.nom} GRRR! GRRRR! GR!!!!!!!!`
    }
};

console.log(chient.decrire());
const animaux = "chat";
if (animaux === "chat") {
    console.log(chient.aboyer());
}

