const {sleep} = require("./10_promise");

/**
 * Créez une fonction synchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser .then
 * 
 * contrainte:
 *    - votre fonction doit être synchrone et ne pas retourner de Promise
 *    - ne pas utiliser async await
 * 
 */
const usingThen = (cb) => {
    /*return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 2000);
    }).then(cb);*/
    sleep().then(cb);
}

usingThen(() => { console.log("then"); });

/**
 * Créez une fonction asynchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser await
 * 
 * contrainte:
 *   - votre fonction doit être asynchrone et retourner une Promise
 *   - ne pas utiliser .then
 */

const usingAwait = async(cb) => {
    /*const result =*/ await sleep();
    cb();
}

usingAwait(() => { console.log("await"); });

/**
 * Créez une fonction asynchrone qui effectue un appel api vers l'url passé en paramètre
 * retourne le résultat de la requête (body)
 * 
 * Vous pouvez utiliser axios, mais n'oubliez pas d'installer le package et de l'importer
 * npm install axios
 * 
 * votre réponse doit être un objet json
 * 
 * url de test: https://jsonplaceholder.typicode.com/todos/1
 */

//décommentez la ligne suivante une fois le package installé
const axios = require("axios");

const apiResponse = async (url) => {
    /*axios({
        method: 'get',
        url: url,
        responseType: 'json'
      }).then((res) => console.log(res.data));*/

      /*const res = await axios({
        method: 'get',
        url: url,
        responseType: 'json'
      });
      return res.data;*/

      try {
        return (await axios.get(url)).data;        
      } catch(e) {
        console.error(e);
        return e;
      }
}

//apiResponse("https://jsonplaceholder.typicode.com/todos/1");

(async() => {
  console.log(await apiResponse("https://jsonplaceholder.typicode.com/todos/1"));
})()

module.exports = {usingThen, usingAwait, apiResponse};