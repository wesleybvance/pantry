/* eslint-disable no-unused-vars */

const ConvertUnits = (recipeIng, pantryIng) => {
  // IF RECIPE UNIT DOESNT MATCH PANTRY UNIT
  if (recipeIng.id === pantryIng.id && recipeIng.unit !== pantryIng.unit) {
    // IF RECIPE IS GRAMS, PANTRY IS OZ
    if ((recipeIng.unit === 'grams') && (pantryIng.unit === 'ounces')) {
      const oldRecipeIngAmount = recipeIng.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 0.03;
      if (newRecipeIngAmount > pantryIng.amount) {
        console.warn('need more ingredient');
      } else {
        const newPantryIngAmount = pantryIng.amount - newRecipeIngAmount;
        // UPDATE PANTRY ING API CALL
      }
    } else if ((recipeIng.unit === 'ounces') && (pantryIng.unit === 'grams')) {
      // RECIPE UNIT IS OZ, PANTRY UNIT IS G
      const oldRecipeIngAmount = recipeIng.amount;
      const newRecipeIngAmount = oldRecipeIngAmount / 0.03;
      if (newRecipeIngAmount > pantryIng.amount) {
        console.warn('need more ingredient');
      } else {
        const newPantryIngAmount = pantryIng.amount - newRecipeIngAmount;
        // UPDATE PANTRY ING API CALL
      }
    } else if ((recipeIng.unit === 'tsp') && (pantryIng.unit === 'grams')) {
      // RECIPE UNIT IS TSP, PANTRY UNIT IS G
      const oldRecipeIngAmount = recipeIng.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 4.5;
      if (newRecipeIngAmount > pantryIng.amount) {
        console.warn('need more ingredient');
      } else {
        const newPantryIngAmount = pantryIng.amount - newRecipeIngAmount;
        // UPDATE PANTRY ING API CALL
      }
    }
  }
};
