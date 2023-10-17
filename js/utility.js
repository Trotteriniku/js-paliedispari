// FUNCTION LIBRARY

/**
 * [gerRdnInteger]
 * Genera un numero random
 * 
 * @param {Number} min il primo numero
 * @param {Number} max il secondo numero
 * 
 * @returns {Number} il numero randomico generato
 * 
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Determina se un numero è pari
 * 
 * @param {Number} num 
 * @returns {Boolean}
 */
function isEven(num) {
    return (num % 2 === 0)? true : false;
}