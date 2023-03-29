/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { getIngredientsByUID } from '../../../api/ingredientsData';
import { getUserAndPublicRecipes, viewRecipeDetails } from '../../../api/mergedData';
import RecipeCard from '../../../components/RecipeCard';
import { signOut } from '../../../utils/auth';
import { useAuth } from '../../../utils/context/authContext';

export default function Readytocook() {
  const { user } = useAuth();
  const [readyRecipes, setReadyRecipes] = useState([]);
  const [pantryIngredients, setPantryIngredients] = useState([]);

  const checkRecipe = (recipeId) => {
    viewRecipeDetails(recipeId).then((recipeDetails) => {
      const result = recipeDetails.recipeIngredients?.every((ringredient) => pantryIngredients?.some((pingredient) => pingredient.id === ringredient.id));
      return result;
    });
  };

  const getAllRecipesAvailable = () => {
    getUserAndPublicRecipes(user.uid).then(setReadyRecipes);
    getIngredientsByUID(user.uid).then(setPantryIngredients);
  };

  useEffect(() => {
    getAllRecipesAvailable();
  }, [user]);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
    >
      <Head>
        <title>Recipes to Cook Now</title>
      </Head>

      <div className="d-flex flex-wrap recipe-card-cont">
        {readyRecipes.filter((recipe) => checkRecipe(recipe.firebaseKey)).map((recipe) => (
          <RecipeCard key={recipe.firebaseKey} recipeObj={recipe} onUpdate={getAllRecipesAvailable} />
        ))}
      </div>
      {user ? (
        <button className="btn btn-danger btn-lg copy-btn" type="button" onClick={signOut}>
          Sign Out
        </button>
      ) : ''}
    </div>
  );
}
