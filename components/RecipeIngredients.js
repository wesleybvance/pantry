import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewRecipeDetails } from '../api/mergedData';
import { useAuth } from '../utils/context/authContext';
import RecipeIngredientCard from './RecipeIngredientCard';
import RecipeIngredientCardUser from './RecipeIngredientCardUser';
import { getRecipeIngredientsByRecipeID } from '../api/recipeIngredientsData';

export default function RecipeIngredients() {
  const [recipeDetails, setRecipeDetails] = useState({});
  const user = useAuth();
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

  if (user.uid === recipeDetails.uid) {
    return (
      <div>
        <div className="d-flex flex-wrap ingredient-container">
          {recipeDetails.recipeIngredients?.map((ingredient) => (
            <RecipeIngredientCardUser key={ingredient.firebaseKey} ingredientObj={ingredient} onUpdate={getAllRecipeDetails} />
          ))}
        </div>
      </div>
    );
  }
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
