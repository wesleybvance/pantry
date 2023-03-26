/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { viewRecipeDetails } from '../api/mergedData';
import RecipeIngredientCard from './RecipeIngredientCard';
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

  useEffect(() => {
    getAllRecipeDetails(firebaseKey);
  }, [user]);

  return (
    <div>
      {user.uid === recipeDetails.uid ? (<><Button className="recipe-btn" variant="light" onClick={handleClick}>Add Recipe Ingredient</Button><NewRecipeIngredient afterSubmit={getAllRecipeDetails} show={showIngredientModal} handleClose={handleCloseBtn} /></>) : ''}
      <div className="recipe-ingredient-container">
        {/* MAP OVER INGREDIENT CARDS - RECIPE INGREDIENT COMPONENT */}
        {recipeDetails.recipeIngredients?.map((ingredient) => (
          <RecipeIngredientCard afterSubmit={getAllRecipeDetails} key={ingredient.firebaseKey} ingredientObj={ingredient} onUpdate={getAllRecipeDetails} />
        ))}
      </div>
    </div>
  );
}
