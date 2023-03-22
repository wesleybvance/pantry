/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { getIngredientsByUID } from '../api/ingredientsData';
import { useAuth } from './context/authContext';
import { viewRecipeDetails } from '../api/mergedData';

export default function NoMatchRecipe({ recipeId }) {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [pantryIngredients, setPantryIngredients] = useState([]);
  const { user } = useAuth();

  const hasMatchingIds = () => {
    const result = recipeDetails.recipeIngredients?.every((ringredient) => pantryIngredients?.some((pingredient) => pingredient.id === ringredient.id));
    return result;
  };

  useEffect(() => {
    getIngredientsByUID(user.uid).then(setPantryIngredients);
    viewRecipeDetails(recipeId).then(setRecipeDetails);
  }, [user]);

  const handleClick = () => {
    console.warn('see updatepantryfromrecipe');
  };

  return (
    <div>
      {(hasMatchingIds()) ? (<Button onClick={handleClick}>Make This Recipe</Button>) : ('')}
    </div>
  );
}

NoMatchRecipe.propTypes = {
  recipeId: PropTypes.string.isRequired,
};
