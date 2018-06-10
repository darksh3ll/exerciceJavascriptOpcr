/*
Exercice : compte bancaire
*/

const compteBancaire = {
    titulaire: "alex",
    solde : 0,

    crediter: function (credit) {
        this.solde = this.solde + credit
    },

    debiter: function (debit) {
        this.solde = this.solde - debit
    },

    decrire: function () {
        
        if (this.solde < 0) {
            alert("ATTENTION !!!! Le compte est a découvert");
        }else {
             return `${this.titulaire} a un solde bancaire de ${this.solde} Euros`;
        }

    }
};

console.log(compteBancaire.decrire());
compteBancaire.debiter(200);

console.log(compteBancaire.decrire());