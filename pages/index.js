import { useEffect, useState } from 'react';
import { getPublicRecipes } from '../api/recipeData';
import RecipeCard from '../components/RecipeCard';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

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
  }, []);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
    >
      <h1>Hello {user.displayName}! </h1>
      <div className="d-flex flex-wrap">
        {/* MAP OVER RECIPE CARDS - RECIPECARD COMPONENT */}
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.firebaseKey} recipeObj={recipe} onUpdate={getHomeRecipes} />
        ))}
      </div>
      <button className="btn btn-danger btn-lg copy-btn" type="button" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
}

export default Home;
