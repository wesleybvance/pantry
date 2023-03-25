/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getUserRecipes } from '../../api/recipeData';
import RecipeCard from '../../components/RecipeCard';
import UserRecipeSearchBar from '../../components/UserRecipeSearch';
import { useAuth } from '../../utils/context/authContext';

function UserRecipes() {
  // GET ACCESS TO USER OBJECT VIA GOOGLE AUTH
  const { user } = useAuth();
  // SET STATE FOR RECIPES
  const [recipes, setRecipes] = useState([]);
  // GET ALL PUBLIC RECIPES FUNCTION FOR USE EFFECT
  const getAllUserRecipes = () => {
    getUserRecipes(user.uid).then(setRecipes);
  };

  useEffect(() => {
    getAllUserRecipes();
  }, []);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
    >
      <h1 className="recipe-header">Your Recipes</h1>
      <UserRecipeSearchBar />
      <div className="d-flex flex-wrap">
        {/* MAP OVER RECIPE CARDS - RECIPECARD COMPONENT */}
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.firebaseKey} recipeObj={recipe} onUpdate={getAllUserRecipes} />
        ))}
      </div>
    </div>
  );
}

export default UserRecipes;
