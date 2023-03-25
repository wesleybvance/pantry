import { useEffect, useState } from 'react';
import Head from 'next/head';
import { getPublicRecipes } from '../api/recipeData';
import RecipeCard from '../components/RecipeCard';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import PublicRecipeSearchBar from '../components/PublicRecipeSearchBar';

function Home() {
  // GET ACCESS TO USER OBJECT VIA GOOGLE AUTH
  const { user } = useAuth();
  // SET STATE FOR RECIPES
  const [recipes, setRecipes] = useState([]);
  // GET ALL PUBLIC RECIPES FUNCTION FOR USE EFFECT
  const getHomeRecipes = () => {
    getPublicRecipes().then(setRecipes);
  };

  useEffect(() => {
    getHomeRecipes();
  }, [user]);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
    >
      <Head>
        <title>Pantry</title>
      </Head>
      <h1 className="recipe-header">Public Recipes</h1>
      <PublicRecipeSearchBar />
      <div className="d-flex flex-wrap">
        {/* MAP OVER RECIPE CARDS - RECIPECARD COMPONENT */}
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.firebaseKey} recipeObj={recipe} onUpdate={getHomeRecipes} />
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

export default Home;
