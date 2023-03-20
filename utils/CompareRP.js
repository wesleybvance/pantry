/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';

// COMPARES RECIPE INGREDIENTS TO PANTRY INGREDIENTS, RETURNS GREEN SYMBOL IF USER HAS RECIPE INGREDIENT IN PANTRY + ENOUGH FOR RECIPE, ORANGE IF USER HAS RECIPE INGREDIEENT BUT NOT ENOUGH FOR RECIPE

export default function CompareRP({ ingredient, recipeIngredientObj }) {
  if ((ingredient.id === recipeIngredientObj.id) && (ingredient.amount >= recipeIngredientObj.amount)) {
    return (
      <h5>🟢</h5>
    );
  } if ((ingredient.id === recipeIngredientObj.id) && (ingredient.amount < recipeIngredientObj.amount)) {
    return (
      <h5>🟠</h5>
    );
  } if ((ingredient.id === recipeIngredientObj.id) && (ingredient.unit !== recipeIngredientObj.unit)) {
    // UNIT CONVERSION & RESPONSE LOGIC
    if ((ingredient.unit === 'grams') && (recipeIngredientObj.unit === 'ounces')) {
      // CONVERT
    } else if ((ingredient.unit === 'ounces') && (recipeIngredientObj.unit === 'grams')) {
      // CONVERT
    } else if ((ingredient.unit === 'mL') && (recipeIngredientObj.unit === 'grams')) {
      // CONVERT
    } else if ((ingredient.unit === 'grams') && (recipeIngredientObj.unit === 'mL')) {
      // CONVERT
    } else if ((ingredient.unit === 'ounces') && (recipeIngredientObj.unit === 'mL')) {
      // CONVERT
    } else if ((ingredient.unit === 'mL') && (recipeIngredientObj.unit === 'ounces')) {
      // CONVERT
    } else if ((ingredient.unit === 'ounces') && (recipeIngredientObj.unit === 'tsp')) {
      // CONVERT
    } else if ((ingredient.unit === 'tsp') && (recipeIngredientObj.unit === 'ounces')) {
      // CONVERT
    } else if ((ingredient.unit === 'ounces') && (recipeIngredientObj.unit === 'tsbp')) {
      // CONVERT
    } else if ((ingredient.unit === 'tbsp') && (recipeIngredientObj.unit === 'ounces')) {
      // CONVERT
    } else if ((ingredient.unit === 'cups') && (recipeIngredientObj.unit === 'ounces')) {
      // CONVERT
    } else if ((ingredient.unit === 'ounces') && (recipeIngredientObj.unit === 'cups')) {
      // CONVERT
    } else if ((ingredient.unit === 'tsp') && (recipeIngredientObj.unit === 'grams')) {
      // CONVERT
    }
  } return ('');
}

CompareRP.propTypes = {
  recipeIngredientObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    amount: PropTypes.number,
    name: PropTypes.string,
    photo: PropTypes.string,
    unit: PropTypes.string,
    recipeId: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  ingredient: PropTypes.shape({
    firebaseKey: PropTypes.string,
    amount: PropTypes.number,
    name: PropTypes.string,
    photo: PropTypes.string,
    unit: PropTypes.string,
    recipeId: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
