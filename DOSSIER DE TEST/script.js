const Personnage = {
    //Initialise le joueur
    init: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.experience = 0;
    },

    //Description du personnage
    decrire: function () {
        return `${this.nom} a ${this.sante} points de vie ${this.force} en force et ${this.experience} éxpérience`

    },
};

const perso1 = Object.create(Personnage);
perso1.init("stephane",150,25);

const perso2 = Object.create(Personnage);
perso2.init("Alex",150,25);

console.log(perso1.decrire());
console.log(perso2.decrire());
