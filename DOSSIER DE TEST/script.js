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

window.fetch('http://api.openweathermap.org/data/2.5/weather?q=Toulon&units=metric&lang=fr&appid=06b50d32565202dcd5d76bc954529d6b')
    .then(res => res.json())
    .then(resjson => console.log(resjson));


