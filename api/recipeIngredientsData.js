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

const updateRecipeIngredient

const createRecipeIngredient

const deleteRecipeIngredient 

export {
  getSpoonIngredients,
  getRecipeIngredientsByRecipeID,
};
