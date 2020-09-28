const BASE_URL = 'http://localhost:3001';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  badges: {
    list() { //MÉTODO GET, solicita una representación de un recurso en específico, las peticiones que usan este método SOLO RECUPERAN DATOS -- Por ello se utiliza en Badges
      return callApi('/badges'); //callApi es una función interna para correr un request hacia una API, que en este caso es el SERVER /badges es la dirección de donde se hace la petición, el método es GET
      //GET hace una petición al servidor de todos los datos que tiene guardados y presenta esos datos en badges
    },
    create(badge) {
      // throw new Error ('500 server Error') //este error se visualizaría en badgenew
      return callApi(`/badges`, {
        method: 'POST', //Se utiliza para enviar una entidad a un recurso en específico, con POST enviamos los datos del nuevo badge hacia /badges
        body: JSON.stringify(badge),//POST es equivalente a realizar un INSERT en la base de datos
      }); //POST envia los datos del badge al servidor, hace un insert en la base de datos, se envían hacia la url /badges
    },
    read(badgeId) {
      return callApi(`/badges/${badgeId}`); //este método, extrae los datos guardados de badges/id 
      //GET hace una petición al servidor de todos los badges (datos) que tiene guardados, y los presenta en la url badges/id del badge, usamos cada id para aumentar la especificidad de los resultados
      //De este modo cada que hacemos clic en un badge, accedemos a él mediante su id en la url
    },
    update(badgeId, updates) { //recibe el badge id que podemos obtener mediante match y los updates
      return callApi(`/badges/${badgeId}`, {
        method: 'PUT', //PUT se encarga de hacer updates, actualiza contenidos
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(badgeId) {
      return callApi(`/badges/${badgeId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;
