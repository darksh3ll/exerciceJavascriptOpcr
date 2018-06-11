const chien = {

    init: function (nom, race, age) {
        this.nom  = nom;
        this.race = race;
        this.age  = age;
    },

    description: function () {
        return `${this.nom} est un ${this.race} agé de ${this.age} ans`
    }

}

const chien1 = Object.create(chien);
chien1.init("Ralf", "Coker", 5);

const chien2 = Object.create(chien);
chien2.init("Max", "Pit-Bull", 3)

console.log(chien1.age < chien2.age ? "oui" : "non");

