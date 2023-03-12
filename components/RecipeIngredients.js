import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { viewRecipeDetails } from '../api/mergedData';
import { useAuth } from '../utils/context/authContext';
import RecipeIngredientCard from './RecipeIngredientCard';
import RecipeIngredientCardUser from './RecipeIngredientCardUser';
import { getRecipeIngredientsByRecipeID } from '../api/recipeIngredientsData';

export default function RecipeIngredients({ firebaseKey }) {
  const [recipeDetails, setRecipeDetails] = useState({});
  const user = useAuth();

  useEffect(() => {
    viewRecipeDetails(firebaseKey).then(setRecipeDetails);
  }, [firebaseKey]);

  const getAllRecipeIngredients = () => {
    getRecipeIngredientsByRecipeID(firebaseKey);
  };

  if (recipeDetails.uid === user.uid) {
    return (
      <div>
        <div className="d-flex flex-wrap ingredient-container">
          {recipeDetails.recipeIngredients?.map((ingredient) => (
            <RecipeIngredientCardUser key={ingredient.firebaseKey} ingredientObj={ingredient} onUpdate={getAllRecipeIngredients} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="d-flex flex-wrap ingredient-container">
        {/* MAP OVER INGREDIENT CARDS - RECIPE INGREDIENT COMPONENT */}
        {console.warn(recipeDetails)}
        {console.warn(user)}
        {recipeDetails.recipeIngredients?.map((ingredient) => (
          <RecipeIngredientCard key={ingredient.firebaseKey} ingredientObj={ingredient} onUpdate={getAllRecipeIngredients} />
        ))}
      </div>
    </div>
  );
}

RecipeIngredients.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
};
