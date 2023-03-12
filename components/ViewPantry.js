import React, { useEffect, useState } from 'react';
import { getIngredientsByUID } from '../api/ingredientsData';
import { useAuth } from '../utils/context/authContext';
import IngredientCard from './IngredientCard';

export default function ViewPantry() {
  const { user } = useAuth();
  // SET STATE FOR INGREDIENTS (USER)
  const [ingredients, setIngredients] = useState([]);
  // GET ALL USER INGREDIENTS FOR USE EFFECT
  const getAllIngredients = () => {
    getIngredientsByUID(user.uid).then(setIngredients);
  };

  useEffect(() => {
    getAllIngredients();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="d-flex flex-wrap">
        {/* MAP OVER RECIPE CARDS - RECIPECARD COMPONENT */}
        {ingredients.map((ingredient) => (
          <IngredientCard key={ingredient.firebaseKey} ingredientObj={ingredient} onUpdate={getAllIngredients} />
        ))}
      </div>
    </div>
  );
}
