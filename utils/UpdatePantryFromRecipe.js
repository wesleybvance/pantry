/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { getIngredientsByUID, updateIngredient } from '../api/ingredientsData';
import { viewRecipeDetails } from '../api/mergedData';
import { useAuth } from './context/authContext';
import convertUnitsPantryUpdate from './UnitConversion';

export default function UpdatePantryFromRecipe({ recipeId }) {
  const { user } = useAuth();
  const [pantryIngredients, setPantryIngredients] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState({});

  useEffect(() => {
    getIngredientsByUID(user.uid).then(setPantryIngredients);
    viewRecipeDetails(recipeId).then(setRecipeDetails);
  }, [user]);

  const updatePantry = (recipe, pantry) => {
    recipe.recipeIngredients?.forEach((recipeIngredient) => {
      pantry?.forEach((pantryIngredient) => {
        // IF ID, UNIT, MATCH AND RECIPE ING AMOUNT IS LESS THAN/EQUAL TO, UPDATE INGREDIENT
        if (recipeIngredient.id === pantryIngredient.id && recipeIngredient.unit === pantryIngredient.unit && recipeIngredient.amount <= pantryIngredient.amount) {
          const newAmount = pantryIngredient.amount - recipeIngredient.amount;
          if (newAmount >= 0) {
            const patchPayload = { amount: newAmount, firebaseKey: pantryIngredient.firebaseKey };
            updateIngredient(patchPayload);
          } else if (newAmount < 0) {
            const patchPayload = { amount: 0, firebaseKey: pantryIngredient.firebaseKey };
            updateIngredient(patchPayload);
          }
        } else if (recipeIngredient.id === pantryIngredient.id && recipeIngredient.unit !== pantryIngredient.unit) {
          convertUnitsPantryUpdate(recipeIngredient, pantryIngredient);
        } else console.warn('nothing to update');
      });
    });
  };

  const handleClick = () => {
    if (window.confirm('Are you sure you want to update your pantry?')) {
      updatePantry(recipeDetails, pantryIngredients);
    }
  };

  const hasMatchingIds = () => {
    const result = recipeDetails.recipeIngredients?.every((ringredient) => pantryIngredients?.some((pingredient) => pingredient.id === ringredient.id && pingredient.amount > 0));
    return result;
  };

  return (
    <>{(hasMatchingIds()) ? (<Button className="recipe-btn" variant="danger" onClick={handleClick}>Make This Recipe</Button>) : ('')}</>
  );
}

UpdatePantryFromRecipe.propTypes = {
  recipeId: PropTypes.string.isRequired,
};
