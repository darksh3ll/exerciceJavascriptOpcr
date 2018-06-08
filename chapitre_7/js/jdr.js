/*
Mini-jeu de rôle
*/

let perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    //Renvoie la description du personnage
    decrire : function () {
        return `${this.nom} a ${this.sante} de point de vie et ${this.force} de force`
    }
};

console.log(perso.decrire());
perso.sante = perso.sante - 10 ;
console.log(perso.decrire());