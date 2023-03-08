import { deleteRecipe, getSingleRecipe } from './recipeData';
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

export {
  deleteRecipeIngredients,
  viewRecipeDetails,
  viewRecipeIngredientDetails,
};
