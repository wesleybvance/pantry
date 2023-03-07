import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getPublicRecipes = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/recipes.json?orderBy="isPublic"&equalTo=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
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

const getUserRecipes = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/recipes.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
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

const getSingleRecipe = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/recipes/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateRecipe = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/recipes/${payload.firebaseKey}.json`, {
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

const createRecipe = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/recipes.json`, {
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

const deleteRecipe = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/recipes/${firebaseKey}.json`, {
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
  getPublicRecipes,
  deleteRecipe,
  getSingleRecipe,
  updateRecipe,
  createRecipe,
  getUserRecipes,
};
