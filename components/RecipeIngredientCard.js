/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getSingleRecipe } from '../api/recipeData';
import { deleteRecipeIngredient } from '../api/recipeIngredientsData';
import EditRecipeIngredient from './EditRecipeIngredient';

export default function RecipeIngredientCard({ ingredientObj, onUpdate }) {
  const [showIngredientModal, setShowIngredientModal] = useState(false);
  const [recipe, setRecipe] = useState({});
  const { user } = useAuth();

  const deleteIngredientCard = () => {
    if (window.confirm(`Delete ${ingredientObj.name}?`)) {
      deleteRecipeIngredient(ingredientObj.firebaseKey).then(() => onUpdate());
    }
  };
  const handleClick = () => {
    setShowIngredientModal(true);
  };

  const handleCloseBtn = () => {
    setShowIngredientModal(false);
  };

  useEffect(() => {
    getSingleRecipe(ingredientObj.recipeId).then((recipeObj) => setRecipe(recipeObj));
  }, [ingredientObj]);

  return (
    <Card>
      <div className="ingredient-info">
        <div>
          <Card.Img className="ing-img" src={ingredientObj.photo} />
        </div>
        <div>
          <Card.Body>
            <Card.Title>{ingredientObj.name}</Card.Title>
            <Card.Text>
              {ingredientObj.amount} {ingredientObj.unit}
            </Card.Text>
          </Card.Body>
        </div>
        {recipe.uid === user.uid ? (
          <div className="ing-btn">
            <Button variant="primary" onClick={handleClick}>Edit</Button>
            <EditRecipeIngredient ingObj={ingredientObj} show={showIngredientModal} handleClose={handleCloseBtn} />
            <Button variant="primary" onClick={deleteIngredientCard}>Delete</Button>
          </div>
        ) : ''}
      </div>
    </Card>
  );
}

RecipeIngredientCard.propTypes = {
  ingredientObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    amount: PropTypes.number,
    name: PropTypes.string,
    photo: PropTypes.string,
    unit: PropTypes.string,
    recipeId: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
