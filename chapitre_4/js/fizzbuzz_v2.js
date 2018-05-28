/* 
Exercice : FizzBuzz
*/

// Solution construisant le message à afficher par concaténation
for (let i = 1; i < 200; i++) {
    if ((i%3===0)&&(i%5===0)) {
        console.log(`${i} divisible par 3 et 5`)
    }else if (i%3===0){
        console.log(`${i} divisible par 3`)
    }else if (i%5===0){
console.log(`${i} divisible par 5`)
    }else {
        console.log(i);
    }
}