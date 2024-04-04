// chiediamo all'utente di scegliere tra pari o dispari tramite prompt

const userEvenOdd= prompt("inserisci la parola pari o dispari");
console.log("scelta dell'utente:", userEvenOdd);

// chiediamo all'utente di scegliere un numero tra 1 e 5 tramite prompt

const userNumber = parseInt(prompt ("inserisci un numero compreso tra 1 e 5"));  //number
console.log("numero dell'utente:", userNumber);

// variabile per il risultato del numero random
const rdnComputerNumber = 0; //number

// somma del numero random e del numero dato dall'utente
let sum = userNumber + rdnComputerNumber; //number

// variabile del vincitore
let winner = ""; //string

// test delle funzioni
console.log("numero random:", rndInteger(rdnComputerNumber));
console.log("risultato della somma:", sum);
console.log(isEven(sum));
console.log(gameWinner(winner));