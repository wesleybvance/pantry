import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getIngredientsByUID } from '../api/ingredientsData';
import { useAuth } from '../utils/context/authContext';
import IngredientCard from './IngredientCard';
import NewIngredient from './NewIngredient';

export default function ViewPantry() {
  const { user } = useAuth();
  // SET STATE FOR INGREDIENTS (USER)
  const [ingredients, setIngredients] = useState([]);
  // GET ALL USER INGREDIENTS FOR USE EFFECT
  const getAllIngredients = () => {
    getIngredientsByUID(user.uid).then(setIngredients);
  };
  const [showIngredientModal, setShowIngredientModal] = useState(false);

  const handleClick = () => {
    setShowIngredientModal(true);
  };

  const handleCloseBtn = () => {
    setShowIngredientModal(false);
  };

  useEffect(() => {
    getIngredientsByUID(user.uid).then(setIngredients);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      <div>
        <Button variant="primary" onClick={handleClick}>Add Pantry Ingredient</Button><NewIngredient afterSubmit={getAllIngredients} show={showIngredientModal} handleClose={handleCloseBtn} />
      </div>
      <div className="ingredient-container">
        {/* MAP OVER INGREDIENT CARDS - INGREDIENT COMPONENT */}
        {ingredients.map((ingredient) => (
          <IngredientCard key={ingredient.firebaseKey} ingredientObj={ingredient} onUpdate={getAllIngredients} />
        ))}
      </div>
    </div>
  );
}
