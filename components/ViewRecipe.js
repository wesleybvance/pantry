/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSingleRecipe } from '../api/recipeData';
import RecipeIngredients from './RecipeIngredients';

export default function ViewRecipe({ firebaseKey }) {
  const [recipeInfo, setRecipeInfo] = useState({});

  const getRecipeInfo = () => {
    getSingleRecipe(firebaseKey).then(setRecipeInfo);
  };

  useEffect(() => {
    getRecipeInfo(firebaseKey);
  }, [firebaseKey]);

  return (
    <div>
      <h1>{recipeInfo.name}</h1>
      <div className="recipe-container">
        <div className="photo-ing-cont">
          <img src={recipeInfo.photo} width="500px" alt="recipePhoto" />
          <RecipeIngredients key={firebaseKey} firebaseKey={firebaseKey} />
        </div>
        <div className="recipe-instructions">
          {recipeInfo.instructions}
        </div>
      </div>
    </div>
  );
}

ViewRecipe.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
};
