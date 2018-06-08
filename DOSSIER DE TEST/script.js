
const ordinateur    = {
    marque          : "apple",
    type            : "latop",
    ref             : "Mac Book Pro",
    annee           : 2017,
    prix            : 3000
};

ordinateur.marque = "asus";
ordinateur.marque = "hp";

console.log(`ordinateur de marque ${ordinateur.marque} de type ${ordinateur.type} référence ${ordinateur.ref} annee ${ordinateur.annee}`);

console.log(ordinateur.prix);