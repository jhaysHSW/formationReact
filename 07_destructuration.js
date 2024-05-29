
/**
 * utilisez la décomposition pour extraire la premiere et la 2e case du tableau
 * retournez les dans un nouveau tableau
 * 
 * exemple: [1, 2, 3] => [1, 2]
 * 
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 * 
 * contrainte: 
 *  - interdiction d'utiliser [0] et [1]
 *  - interdiction d'utiliser slice ou splice
 */

//const extractFirstTwo = (array) => { let [arg1, arg2] = array; return [arg1, arg2]; }
const extractFirstTwo = ([arg1, arg2]) => [arg1, arg2]

console.log("extractFirstTwo([1, 2, 3]) : " + extractFirstTwo([1, 2, 3]));

/**
 * utilisez la décomposition pour extraire la premiere case du tableau et le reste du tableau
 * retournez uniquement le reste du tableau
 * 
 * exemple: [1, 2, 3] => [2, 3]
 */

//const extractRest = (array) => { let [arg1, ...args] = array; return args; }
//const extractRest = ([arg1, ...args]) => args
const extractRest = ([, ...args]) => args

console.log("extractRest([1, 2, 3]) : " + extractRest([1, 2, 3]));

/**
 * utilisez la décomposition pour extraire le champ "name" de l'objet passé en paramètre
 * retournez le champ "name"
 * 
 * exemple: {name: "toto", age: 42} => "toto"
 * 
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 * 
 * contrainte:
 * - interdiction d'utiliser l'opérateur "." pour accéder au champ "name"
 */

//const extractName = (obj) => { let {name, ...rest} = obj; return name; }
const extractName = ({name}) => name

console.log("extractName({name: toto, age: 42}) : " + extractName({name: "toto", age: 42}));

/**
 * utilisez la décomposition pour retourner l'objet utilisateur sans le champ "password"
 * 
 * exemple: {name: "toto", password: "1234"}
 * 
 * contrainte: 
 *    - interdiction d'utiliser "delete"
 *    - interdiction d'utiliser l'opérateur "." pour accéder au champ "password"
 * 
 */

//const removePassword = (obj) => {let {password, ...rest} = obj; return rest; };
const removePassword = ({password, ...rest}) => rest

console.log("removePassword({name: toto, password: 1234}).password : " + removePassword({name: "toto", password: "1234"}).password);

module.exports = {extractFirstTwo, extractRest, extractName, removePassword}