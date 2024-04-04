// definisco una funzione che permette di controllare se un numero è pari

/**
 * Description la funzione verifica se il risultato ottenuto è  un numero pari
 * @param {number} numberCheck
 * @returns {booleano} true se è pari, altrimenti false
 */
function isEven(numberCheck) {
    let result; // boolena
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
 * @param {number} 1 valore minimo 
 * @param {numeber} 5 valore massimo 
 * @returns {number} numero generato tra 1 e 5
 */
function rndInteger () {
    const rdnNumber = Math.floor(Math.random() * 5 ) + 1;

    return rdnNumber;
}