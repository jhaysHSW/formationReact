
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

/*const sleep = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("2s");
        }, 2000);
      });
};*/

const sleep = () => new Promise((resolve, reject) => setTimeout(resolve, 2000))

//console.log("sleep() : " + sleep().then((x) => console.log(x)));

module.exports = {sleep};