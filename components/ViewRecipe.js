/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSingleRecipe } from '../api/recipeData';

export default function ViewRecipe({ firebaseKey }) {
  const [recipeInfo, setRecipeInfo] = useState({});

  useEffect(() => {
    getSingleRecipe(firebaseKey).then(setRecipeInfo);
  }, [firebaseKey]);

  return (
    <div>
      <h1>{recipeInfo.name}</h1>
      <div className="recipe-container">
        <div className="photo-ing-cont">
          <img src={recipeInfo.photo} width="500px" alt="recipePhoto" />
          {/* call view recipe ingredients component here  */}
        </div>
        <div className="recipe-instructions">
          {recipeInfo.instructions}
        </div>
      </div>
    </div>
  );
}

ViewRecipe.propTypes = {
  recipeObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    instructions: PropTypes.string,
    photo: PropTypes.string,
    isPublic: PropTypes.bool,
  }).isRequired,
  firebaseKey: PropTypes.string.isRequired,
};
