/* eslint-disable no-unused-vars */

import { updateIngredient } from '../api/ingredientsData';

const multiplyUnit = (pantryIng, recipeIng, amount) => {
  const oldRecipeIngAmount = recipeIng.amount;
  const newRecipeIngAmount = oldRecipeIngAmount * amount;
  const newPantryIngAmount = pantryIng.amount - newRecipeIngAmount;
  if (newPantryIngAmount >= 0) {
    const patchPayload = { amount: newPantryIngAmount, firebaseKey: pantryIng.firebaseKey };
    updateIngredient(patchPayload);
  } else if (newPantryIngAmount < 0) {
    const patchPayload = { amount: 0, firebaseKey: pantryIng.firebaseKey };
    updateIngredient(patchPayload);
  }
};

const divideUnit = (pantryIng, recipeIng, amount) => {
  const oldRecipeIngAmount = recipeIng.amount;
  const newRecipeIngAmount = oldRecipeIngAmount / amount;
  const newPantryIngAmount = pantryIng.amount - newRecipeIngAmount;
  if (newPantryIngAmount >= 0) {
    const patchPayload = { amount: newPantryIngAmount, firebaseKey: pantryIng.firebaseKey };
    updateIngredient(patchPayload);
  } else if (newPantryIngAmount < 0) {
    const patchPayload = { amount: 0, firebaseKey: pantryIng.firebaseKey };
    updateIngredient(patchPayload);
  }
};

const convertUnits = (recipeIng, pantryIng) => {
  // IF RECIPE UNIT DOESNT MATCH PANTRY UNIT
  if (recipeIng.id === pantryIng.id && recipeIng.unit !== pantryIng.unit) {
    // IF RECIPE IS GRAMS, PANTRY IS OZ
    if ((recipeIng.unit === 'grams') && (pantryIng.unit === 'ounces')) {
      multiplyUnit(pantryIng, recipeIng, 0.03);
    } else if ((recipeIng.unit === 'ounces') && (pantryIng.unit === 'grams')) {
      // RECIPE UNIT IS OZ, PANTRY UNIT IS G
      multiplyUnit(pantryIng, recipeIng, 30);
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
