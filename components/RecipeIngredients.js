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

  const warnIng = (recipeInfo) => {
    if ((user.uid === recipeInfo.uid) && (!recipeInfo.recipeIngredients.length)) {
      window.confirm('Please add ingredients for this recipe.');
    } else console.warn(recipeInfo.recipeIngredients);
  };

  useEffect(() => {
    getAllRecipeDetails(firebaseKey);
    viewRecipeDetails(firebaseKey).then((recipeInfo) => warnIng(recipeInfo));
  }, [user]);

  return (
    <div>
      {/* {((user.uid === recipeDetails?.uid) && (!recipeDetails?.recipeIngredients)) ? (window.confirm('Please add ingredients for this recipe.')) : (console.warn('not working'))} */}
      <Button className="recipe-btn-instructions-top" id="recipeInstructionsBtn" disabled>Ingredients</Button>
      {user.uid === recipeDetails.uid ? (<><Button className="recipe-btn" variant="danger" onClick={handleClick}>Add Recipe Ingredient</Button><NewRecipeIngredient afterSubmit={getAllRecipeDetails} show={showIngredientModal} handleClose={handleCloseBtn} /></>) : ''}
      <div className="recipe-ingredient-container">
        {/* MAP OVER INGREDIENT CARDS - RECIPE INGREDIENT COMPONENT */}
        {recipeDetails.recipeIngredients?.map((ingredient) => (
          <RecipeIngredientCard afterSubmit={getAllRecipeDetails} key={ingredient.firebaseKey} ingredientObj={ingredient} onUpdate={getAllRecipeDetails} />
        ))}
      </div>
    </div>
  );
}
