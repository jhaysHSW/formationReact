
/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est explicite
 * 
 * contrainte: 
 *   - le mot clée "function" est interdis
 */

let arrow1 = (a) => { return a + 1; };

/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est implicite
 * 
 * contrainte: 
 *   - le mot clée "function" est interdis
 *   - le mot clée "return" est interdis
 */

let arrow2 = (a) => a + 1;

console.log("arrow1(1) : " + arrow1(1));
console.log("arrow2(1) : " + arrow2(1));

module.exports = {arrow1, arrow2};