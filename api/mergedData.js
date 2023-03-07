import { deleteRecipe } from './recipeData';
import { deleteRecipeIngredient, getRecipeIngredientsByRecipeID } from './recipeIngredientsData';

const deleteRecipeAndIngredients = (recipeId) => new Promise((resolve, reject) => {
  getRecipeIngredientsByRecipeID(recipeId).then((ingredientsArray) => {
    const deleteIngredientPromises = ingredientsArray.map((ingredient) => deleteRecipeIngredient(ingredient.firebaseKey));

    Promise.all(deleteIngredientPromises).then(() => {
      deleteRecipe(recipeId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export default deleteRecipeAndIngredients;
