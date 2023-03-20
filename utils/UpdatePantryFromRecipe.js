/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { getIngredientsByUID, updateIngredient } from '../api/ingredientsData';
import { viewRecipeDetails } from '../api/mergedData';
import { useAuth } from './context/authContext';

export default function UpdatePantryFromRecipe({ recipeId }) {
  const { user } = useAuth();
  const [pantryIngredients, setPantryIngredients] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState({});

  useEffect(() => {
    console.warn(recipeId);
    getIngredientsByUID(user.uid).then(setPantryIngredients);
    viewRecipeDetails(recipeId).then(setRecipeDetails);
  }, [user]);

  const updatePantry = (recipe, pantry) => {
    recipe.recipeIngredients?.forEach((recipeIngredient) => {
      pantry?.forEach((pantryIngredient) => {
        if (recipeIngredient.id === pantryIngredient.id && recipeIngredient.unit === pantryIngredient.unit && recipeIngredient.amount <= pantryIngredient.amount) {
          const newAmount = pantryIngredient.amount - recipeIngredient.amount;
          const patchPayload = { amount: newAmount, firebaseKey: pantryIngredient.firebaseKey };
          updateIngredient(patchPayload);
        } else if (recipeIngredient.id === pantryIngredient.id && recipeIngredient.unit === pantryIngredient.unit && recipeIngredient.amount > pantryIngredient.amount) {
          console.warn('need more ingredients');
        } else console.warn('no matching ingredients');
      });
    });
  };

  const handleClick = () => {
    updatePantry(recipeDetails, pantryIngredients);
  };

  return (
    <Button onClick={handleClick}>Made This Recipe</Button>
  );
}

UpdatePantryFromRecipe.propTypes = {
  recipeId: PropTypes.string.isRequired,
};
