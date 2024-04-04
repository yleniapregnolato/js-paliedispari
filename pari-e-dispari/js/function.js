// definisco una funzione che permette di controllare se un numero è pari

/**
 * Description la funzione verifica se il risultato ottenuto è  un numero pari
 * @param {number} numberCheck
 * @returns {boolean} true se è pari, altrimenti false
 */
function isEven(numberCheck) {
    let result; // boolean
    if (numberCheck % 2 === 0) {
        result = true
        console.log("numero pari");
    } else {
        result = false
        console.log("numero dispari");
    }

    return result;
}

// definisco una funzione per generare un numero random
/**
 * Description
 * @param {number} min 1 valore minimo 
 * @param {numeber} max  5 valore massimo 
 * @returns {number} numero generato tra 1 e 5
 */
function rndInteger (min, max) {
    const rdnNumber = Math.floor(Math.random() * 5 ) + 1;

    return rdnNumber;
}

// definisco una funzione per dichiarare chi ha vinto
    // se la somma rispecchia la scelta dell'utente avrà vinto lui
    // altrimenti avrà vinto il computer

/**
 * Description
 * @param {string} winnerCheck
 * @returns {stringa} se i volori sono uguali vince l'utente, altrimenti vince il computer
 */
function gameWinner (winnerCheck) {
    let result;
    if (isEven === true && userEvenOdd === "pari") {
        result = true;
        console.log("complimenti user, hai vinto", result);
    } else {
        result = false;
        console.log("mi dispiace non hai vinto");
    }

    return result;
}
