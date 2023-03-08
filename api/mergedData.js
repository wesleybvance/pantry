import { deleteRecipe, getSingleRecipe } from './recipeData';
import { deleteRecipeIngredient, getRecipeIngredientsByRecipeID, getSingleRecipeIngredient } from './recipeIngredientsData';

const deleteRecipeAndIngredients = (recipeId) => new Promise((resolve, reject) => {
  getRecipeIngredientsByRecipeID(recipeId).then((ingredientsArray) => {
    const deleteIngredientPromises = ingredientsArray.map((ingredient) => deleteRecipeIngredient(ingredient.firebaseKey));

    Promise.all(deleteIngredientPromises).then(() => {
      deleteRecipe(recipeId).then(resolve);
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

export {
  deleteRecipeAndIngredients,
  viewRecipeDetails,
  viewRecipeIngredientDetails,
};
