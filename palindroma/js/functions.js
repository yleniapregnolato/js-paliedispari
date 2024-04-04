// creiamo una funzione per capire se la parola inserita è palindroma o meno

/**
 * Description la funzione verifica se la parola inserita è palindroma
 * @param {string} word
 * @returns {boolean} true se la parola è palindroma, altrimenti false
 */
function palindromicWord(word) {

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length - (1 + i)]) {
            return false;
        }
    }

    return true;
}