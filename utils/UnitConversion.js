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

const convertUnitsPantryUpdate = (recipeIng, pantryIng) => {
  // IF RECIPE IS GRAMS, PANTRY IS OZ
  if ((recipeIng.unit === 'grams') && (pantryIng.unit === 'ounces')) {
    multiplyUnit(pantryIng, recipeIng, 0.03);
  } else if ((recipeIng.unit === 'ounces') && (pantryIng.unit === 'grams')) {
    // RECIPE UNIT IS OZ, PANTRY UNIT IS G
    multiplyUnit(pantryIng, recipeIng, 30);
  } else if ((recipeIng.unit === 'tsp') && (pantryIng.unit === 'grams')) {
    // RECIPE UNIT IS TSP, PANTRY UNIT IS G
    multiplyUnit(pantryIng, recipeIng, 4.5);
  } else if ((recipeIng.unit === 'grams') && (pantryIng.unit === 'mL')) {
    // RECIPE UNIT IS GRAMS, PANTRY UNIT IS ML
    multiplyUnit(pantryIng, recipeIng, 1);
  } else if ((recipeIng.unit === 'grams') && (pantryIng.unit === 'tsp')) {
    // RECIPE UNIT IS GRAMS, PANTRY UNIT IS TSP
    divideUnit(pantryIng, recipeIng, 4.5);
  } else if ((recipeIng.unit === 'grams') && (pantryIng.unit === 'tbsp')) {
    // RECIPE UNIT IS GRAMS, PANTRY UNIT IS TBSP
    divideUnit(pantryIng, recipeIng, 14.8);
  } else if ((recipeIng.unit === 'grams') && (pantryIng.unit === 'cup')) {
    // RECIPE UNIT IS GRAMS, PANTRY UNIT IS CUP
    divideUnit(pantryIng, recipeIng, 220);
  } else if ((recipeIng.unit === 'ounces') && (pantryIng.unit === 'mL')) {
    // RECIPE UNIT IS OUNCES, PANTRY UNIT IS ML
    multiplyUnit(pantryIng, recipeIng, 30);
  } else if ((recipeIng.unit === 'ounces') && (pantryIng.unit === 'tsp')) {
    // RECIPE UNIT IS OUNCES, PANTRY UNIT IS TSP
    multiplyUnit(pantryIng, recipeIng, 6);
  } else if ((recipeIng.unit === 'ounces') && (pantryIng.unit === 'tbsp')) {
    // RECIPE UNIT IS OUNCES, PANTRY UNIT IS TBSP
    multiplyUnit(pantryIng, recipeIng, 2);
  } else if ((recipeIng.unit === 'ounces') && (pantryIng.unit === 'cup')) {
    // RECIPE UNIT IS OUNCES, PANTRY UNIT IS CUP
    divideUnit(pantryIng, recipeIng, 8);
  } else if ((recipeIng.unit === 'mL') && (pantryIng.unit === 'grams')) {
    // RECIPE UNIT IS ML, PANTRY UNIT IS GRAMS
    multiplyUnit(pantryIng, recipeIng, 1);
  } else if ((recipeIng.unit === 'mL') && (pantryIng.unit === 'ounces')) {
    // RECIPE UNIT IS ML, PANTRY UNIT IS OUNCES
    multiplyUnit(pantryIng, recipeIng, 0.03);
  } else if ((recipeIng.unit === 'mL') && (pantryIng.unit === 'tsp')) {
    // RECIPE UNIT IS ML, PANTRY UNIT IS TSP
    divideUnit(pantryIng, recipeIng, 4.5);
  } else if ((recipeIng.unit === 'mL') && (pantryIng.unit === 'tbsp')) {
    // RECIPE UNIT IS ML, PANTRY UNIT IS TBSP
    divideUnit(pantryIng, recipeIng, 14.8);
  } else if ((recipeIng.unit === 'mL') && (pantryIng.unit === 'cup')) {
    // RECIPE UNIT IS ML, PANTRY UNIT IS CUP
    divideUnit(pantryIng, recipeIng, 220);
  } else if ((recipeIng.unit === 'tsp') && (pantryIng.unit === 'ounces')) {
    // RECIPE UNIT IS TSP, PANTRY UNIT IS OUNCES
    divideUnit(pantryIng, recipeIng, 6);
  } else if ((recipeIng.unit === 'tsp') && (pantryIng.unit === 'mL')) {
    multiplyUnit(pantryIng, recipeIng, 4.5);
    // RECIPE UNIT IS TSP, PANTRY UNIT IS ML
  } else if ((recipeIng.unit === 'tsp') && (pantryIng.unit === 'tbsp')) {
    // RECIPE UNIT IS TSP, PANTRY UNIT IS TBSP
    divideUnit(pantryIng, recipeIng, 3);
  } else if ((recipeIng.unit === 'tsp') && (pantryIng.unit === 'cup')) {
    // RECIPE UNIT IS TSP, PANTRY UNIT IS CUP
    divideUnit(pantryIng, recipeIng, 48);
  } else if ((recipeIng.unit === 'tbsp') && (pantryIng.unit === 'grams')) {
    // RECIPE UNIT IS TBSP, PANTRY UNIT IS GRAMS
    multiplyUnit(pantryIng, recipeIng, 14.8);
  } else if ((recipeIng.unit === 'tbsp') && (pantryIng.unit === 'ounces')) {
    // RECIPE UNIT IS TBSP, PANTRY UNIT IS OUNCES
    divideUnit(pantryIng, recipeIng, 2);
  } else if ((recipeIng.unit === 'tbsp') && (pantryIng.unit === 'mL')) {
    // RECIPE UNIT IS TBSP, PANTRY UNIT IS ML
    multiplyUnit(pantryIng, recipeIng, 14.8);
  } else if ((recipeIng.unit === 'tbsp') && (pantryIng.unit === 'tsp')) {
    // RECIPE UNIT IS TBSP, PANTRY UNIT IS TSP
    multiplyUnit(pantryIng, recipeIng, 3);
  } else if ((recipeIng.unit === 'tbsp') && (pantryIng.unit === 'cup')) {
    // RECIPE UNIT IS TBSP, PANTRY UNIT IS CUP
    divideUnit(pantryIng, recipeIng, 16);
  } else if ((recipeIng.unit === 'cup') && (pantryIng.unit === 'grams')) {
    // RECIPE UNIT IS CUP, PANTRY UNIT IS GRAMS
    multiplyUnit(pantryIng, recipeIng, 220);
  } else if ((recipeIng.unit === 'cup') && (pantryIng.unit === 'ounces')) {
    // RECIPE UNIT IS CUP, PANTRY UNIT IS OUNCES
    multiplyUnit(pantryIng, recipeIng, 8);
  } else if ((recipeIng.unit === 'cup') && (pantryIng.unit === 'mL')) {
    // RECIPE UNIT IS CUP, PANTRY UNIT IS ML
    multiplyUnit(pantryIng, recipeIng, 220);
  } else if ((recipeIng.unit === 'cup') && (pantryIng.unit === 'tsp')) {
    // RECIPE UNIT IS CUP, PANTRY UNIT IS TSP
    multiplyUnit(pantryIng, recipeIng, 48);
  } else if ((recipeIng.unit === 'cup') && (pantryIng.unit === 'tbsp')) {
    // RECIPE UNIT IS CUP, PANTRY UNIT IS TBSP
    multiplyUnit(pantryIng, recipeIng, 16);
  }
};

export default convertUnitsPantryUpdate;
