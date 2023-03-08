import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getIngredientsByUID = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/ingredients.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application.json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleIngredient = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/ingredients/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createIngredient = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/ingredients.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateIngredient = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/ingredients/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteSingleIngredient = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/ingredients/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getIngredientsByUID,
  getSingleIngredient,
  deleteSingleIngredient,
  updateIngredient,
  createIngredient,
};
