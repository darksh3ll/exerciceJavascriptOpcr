/*
Mini-jeu de rôle
*/

let perso = {
    nom  : "Aurora",
    sante: 150,
    force: 25,
    xp   : 0,

    //Renvoie la description du personnage
    decrire: function () {
        return `${this.nom} a ${this.sante} de point de vie et ${this.force} de force et ${this.xp} point d'éxpérience`
    }
};

console.log(perso.decrire());