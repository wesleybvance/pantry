import { clientCredentials } from '../utils/client';

const spoon = clientCredentials.spoonApiKey;
const dbUrl = clientCredentials.databaseURL;

const getSpoonIngredients = (searchInput) => new Promise((resolve, reject) => {
  fetch(`https://api.spoonacular.com/food/ingredients/search?query=${searchInput}&apiKey=${spoon}`, {
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

const getRecipeIngredientsByRecipeID = (recipeId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/recipeIngredients.json?orderBy="recipeId"&equalTo="${recipeId}"`, {
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

const getSingleRecipeIngredient = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/recipeIngredients/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateRecipeIngredient = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/recipeIngredients/${payload.firebaseKey}.json`, {
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

const createRecipeIngredient = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/recipeIngredients.json`, {
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

const deleteRecipeIngredient = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/recipeIngredients/${firebaseKey}.json`, {
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
  getRecipeIngredientsByRecipeID,
  updateRecipeIngredient,
  deleteRecipeIngredient,
  createRecipeIngredient,
  getSingleRecipeIngredient,
  getSpoonIngredients,
};
