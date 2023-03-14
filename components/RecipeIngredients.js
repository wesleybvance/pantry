import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewRecipeDetails } from '../api/mergedData';
import RecipeIngredientCard from './RecipeIngredientCard';
import { getRecipeIngredientsByRecipeID } from '../api/recipeIngredientsData';

export default function RecipeIngredients() {
  const [recipeDetails, setRecipeDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  const getAllRecipeDetails = () => {
    viewRecipeDetails(firebaseKey).then((recipeObj) => setRecipeDetails(recipeObj));
  };

  const getAllRecipeIngredients = () => {
    getRecipeIngredientsByRecipeID(firebaseKey);
  };

  useEffect(() => {
    getAllRecipeDetails(firebaseKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseKey]);

  return (
    <div>
      <div className="d-flex flex-wrap ingredient-container">
        {/* MAP OVER INGREDIENT CARDS - RECIPE INGREDIENT COMPONENT */}
        {recipeDetails.recipeIngredients?.map((ingredient) => (
          <RecipeIngredientCard key={ingredient.firebaseKey} ingredientObj={ingredient} onUpdate={getAllRecipeIngredients} />
        ))}
      </div>
    </div>
  );
}
