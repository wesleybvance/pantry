import { clientCredentials } from '../utils/client';

const spoon = clientCredentials.spoonApiKey;

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

export default getSpoonIngredients;
