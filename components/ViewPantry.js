import Head from 'next/head';
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
      <Head>
        <title>Pantry Ingredients</title>
      </Head>
      <div className="pantry-header">
        <h1 className="recipe-header">Your Pantry</h1>
        <Button variant="dark" className="add-pantry-ingredient-btn" onClick={handleClick}>+ Add Ingredient</Button><NewIngredient afterSubmit={getAllIngredients} show={showIngredientModal} handleClose={handleCloseBtn} />
      </div>
      <div className="view-pantry-container">
        <div className="ingredient-container">
          {/* MAP OVER INGREDIENT CARDS - INGREDIENT COMPONENT */}
          {ingredients.map((ingredient) => (
            <IngredientCard afterSubmit={getAllIngredients} key={ingredient.firebaseKey} ingredientObj={ingredient} onUpdate={getAllIngredients} />
          ))}
        </div>
      </div>
    </div>
  );
}
