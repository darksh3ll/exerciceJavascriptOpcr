/* 
Exercice : FizzBuzz
*/

// Solution utilisant une série de if/else
for (let i = 0; i < 100; i++) {
    if (i%3===0) {
        console.log("FIZZ")
    }else if (i%5===0){
        console.log("Buzz");
    }else {
        console.log(i);
    }
}