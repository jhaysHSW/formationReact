
/**
 * Utiliser les ternaires en les chainants, pour éviter les if elseif else
 * 
 * Renvoyer ">" si a supérieur à b
 * Renvoyer "<" si a inférieur à b
 * Renvoyer "=" si a égal à b
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */

function ternaryChain(a, b) {
    return a > b ? ">" : a < b ? "<" : "=";
}


console.log("1 ? 2 : " + ternaryChain(1, 2));
console.log("2 ? 1 : " + ternaryChain(2, 1));
console.log("1 ? 1 : " + ternaryChain(1, 1));

module.exports = ternaryChain;