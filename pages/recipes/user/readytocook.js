/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getIngredientsByUID } from '../../../api/ingredientsData';
import { getAllRecipeDetails } from '../../../api/mergedData';
import RecipeCard from '../../../components/RecipeCard';
import { useAuth } from '../../../utils/context/authContext';

export default function Readytocook() {
  const { user } = useAuth();
  const [recipes, setRecipes] = useState([]);
  const [pantryIngredients, setPantryIngredients] = useState([]);
  // const [recipesToCook, setRecipesToCook] = useState([]);

  const checkRecipe = (recipeDetails) => {
    const result = recipeDetails.recipeIngredients?.every((ringredient) => pantryIngredients?.some((pingredient) => pingredient.id === ringredient.id && pingredient.amount > 0));
    return result;
  };

  const filterRecipesToCook = (recipeArray) => {
    const newArr = recipeArray.filter((obj) => checkRecipe(obj));
    return newArr;
  };

  const getRecipes = () => {
    getIngredientsByUID(user.uid).then(setPantryIngredients);
    getAllRecipeDetails(user.uid).then(setRecipes);
  };

  useEffect(() => {
    getRecipes();
  }, [user]);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
    >
      <Head>
        <title>Recipes to Cook Now</title>
      </Head>

      <h1 className="recipe-header">Recipes Available To Cook Now</h1>
      <div className="d-flex flex-wrap recipe-card-cont">
        {((filterRecipesToCook(recipes)).length) ? (filterRecipesToCook(recipes).map((recipe) => (
          <RecipeCard key={recipe.firebaseKey} recipeObj={recipe} onUpdate={getRecipes} />
        ))) : (<h3 className="update-text">There are currently no recipes you can make with the ingredients you have. <br /> <Link id="clickHere" href="/pantry">Click Here</Link> to add more ingredients to your pantry.</h3>)}
      </div>
    </div>
  );
}
