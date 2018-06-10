const ordinateur    = {
    marque          : "apple",
    type            : "latop",
    ref             : "Mac Book Pro",
    annee           : 2017,
    prix            : 3000,
    decrire : function () {
        return this.type
    }
};


console.log(ordinateur.decrire());
