/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { viewRecipeDetails } from '../api/mergedData';
import RecipeIngredientCard from './RecipeIngredientCard';
import { getRecipeIngredientsByRecipeID } from '../api/recipeIngredientsData';
import NewRecipeIngredient from './NewRecipeIngredient';
import { useAuth } from '../utils/context/authContext';

export default function RecipeIngredients() {
  const [recipeDetails, setRecipeDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  const { user } = useAuth();

  const [showIngredientModal, setShowIngredientModal] = useState(false);

  const getAllRecipeDetails = () => {
    viewRecipeDetails(firebaseKey).then((recipeObj) => setRecipeDetails(recipeObj));
  };

  const handleClick = () => {
    setShowIngredientModal(true);
  };

  const handleCloseBtn = () => {
    setShowIngredientModal(false);
  };

  const getAllRecipeIngredients = () => {
    getRecipeIngredientsByRecipeID(firebaseKey);
  };

  useEffect(() => {
    getAllRecipeDetails(firebaseKey);
  }, [recipeDetails]);

  return (
    <div>
      {user.uid === recipeDetails.uid ? (<><Button variant="primary" onClick={handleClick}>Add Recipe Ingredient</Button><NewRecipeIngredient show={showIngredientModal} handleClose={handleCloseBtn} /></>) : ''}
      <div className="d-flex flex-wrap ingredient-container">
        {/* MAP OVER INGREDIENT CARDS - RECIPE INGREDIENT COMPONENT */}
        {recipeDetails.recipeIngredients?.map((ingredient) => (
          <RecipeIngredientCard key={ingredient.firebaseKey} ingredientObj={ingredient} onUpdate={getAllRecipeIngredients} />
        ))}
      </div>
    </div>
  );
}
