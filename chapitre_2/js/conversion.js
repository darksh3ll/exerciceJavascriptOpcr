/*
Exercice : convertir des degrés celsius en fahrenheit
*/
const saisieTempCelsius = Number(prompt("saisir une temperature"));
const ConversionCelsiusFahrenheit = (saisieTempCelsius * 9/5) + 32;
alert(`${ConversionCelsiusFahrenheit} ° Fahrenheit`);