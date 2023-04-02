import {
  deleteRecipe, getPublicRecipes, getSingleRecipe, getUserRecipes,
} from './recipeData';
import { deleteRecipeIngredient, getRecipeIngredientsByRecipeID, getSingleRecipeIngredient } from './recipeIngredientsData';

const deleteRecipeIngredients = (firebaseKey) => new Promise((resolve, reject) => {
  getRecipeIngredientsByRecipeID(firebaseKey).then((ingredientsArray) => {
    const deleteIngredientPromises = ingredientsArray.map((ingredient) => deleteRecipeIngredient(ingredient.firebaseKey));

    Promise.all(deleteIngredientPromises).then(() => {
      deleteRecipe(firebaseKey).then(resolve);
    });
  }).catch((error) => reject(error));
});

const viewRecipeDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleRecipe(firebaseKey).then((recipe) => {
    getRecipeIngredientsByRecipeID(recipe.firebaseKey)
      .then((recipeIngredients) => resolve({ ...recipe, recipeIngredients }));
  }).catch(reject);
});

const viewRecipeIngredientDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleRecipeIngredient(firebaseKey).then((recipeIngredient) => {
    getSingleRecipe(recipeIngredient.recipeId)
      .then((RIData) => resolve({ ...recipeIngredient, RIData }));
  }).catch(reject);
});

const getUserAndPublicRecipes = (uid) => new Promise((resolve, reject) => {
  Promise.all([getPublicRecipes(), getUserRecipes(uid)])
    .then((data) => {
      const array1 = (data[0]);
      const array2 = (data[1]);
      const newArray = array1.concat(array2);
      const noDuplicateRecipes = newArray.filter((obj, index, self) => index === self.findIndex((r) => (r.firebaseKey === obj.firebaseKey)));
      resolve(noDuplicateRecipes);
    })
    .catch((error) => reject(error));
});

const getAllRecipeDetails = (uid) => new Promise((resolve, reject) => {
  getUserAndPublicRecipes(uid).then((recipeArray) => {
    const addRecipeInfo = recipeArray.map((result) => viewRecipeDetails(result.firebaseKey));
    Promise.all(addRecipeInfo).then(resolve);
  }).catch((error) => reject(error));
});

export {
  deleteRecipeIngredients,
  viewRecipeDetails,
  viewRecipeIngredientDetails,
  getUserAndPublicRecipes,
  getAllRecipeDetails,
};
