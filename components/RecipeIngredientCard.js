/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getSingleRecipe } from '../api/recipeData';
import { deleteRecipeIngredient } from '../api/recipeIngredientsData';
import EditRecipeIngredient from './EditRecipeIngredient';
import { getIngredientsByUID } from '../api/ingredientsData';
import CompareRP from '../utils/CompareRP';
import NoMatchRP from '../utils/NoMatchRP';

export default function RecipeIngredientCard({ ingredientObj, onUpdate, afterSubmit }) {
  const [showIngredientModal, setShowIngredientModal] = useState(false);
  const [recipe, setRecipe] = useState({});
  const { user } = useAuth();
  const [pantryIngredients, setPantryIngredients] = useState([]);

  const deleteIngredientCard = () => {
    if (window.confirm(`Delete ${ingredientObj.name}?`)) {
      deleteRecipeIngredient(ingredientObj.firebaseKey).then(() => onUpdate());
    }
  };

  const getPantryIngredients = () => {
    getIngredientsByUID(user.uid).then(setPantryIngredients);
  };

  const handleClick = () => {
    setShowIngredientModal(true);
  };

  const handleCloseBtn = () => {
    setShowIngredientModal(false);
  };

  const getFullRecipe = () => {
    getSingleRecipe(ingredientObj.recipeId).then((recipeObj) => setRecipe(recipeObj));
  };

  useEffect(() => {
    getFullRecipe();
    getPantryIngredients();
  }, [ingredientObj]);

  return (
    <Card className="ingredient-card">
      <div className="ingredient-info">
        <div>
          <Card.Img className="ing-img" src={ingredientObj.photo} />
        </div>
        <div>
          <Card.Body>
            <Card.Title className="ingredient-title">{ingredientObj.name}
              {pantryIngredients?.map((ingredient) => <CompareRP key={ingredient.firebaseKey} ingredient={ingredient} recipeIngredientObj={ingredientObj} />)}
              {ingredientObj.id === 14412 ? (<h5>🟢</h5>) : ''}
              <NoMatchRP key={ingredientObj.firebaseKey} recipeIngredient={ingredientObj} pantryIngredients={pantryIngredients} />
            </Card.Title>
            <Card.Text className="ingredient-details">
              {ingredientObj.amount} {ingredientObj.unit}
            </Card.Text>
          </Card.Body>
        </div>
        {recipe.uid === user.uid ? (
          <div className="ing-btn-cont">
            <Button className="ing-btn edit-btn" variant="light" onClick={handleClick}>EDIT</Button>
            <EditRecipeIngredient afterSubmit={afterSubmit} ingObj={ingredientObj} show={showIngredientModal} handleClose={handleCloseBtn} />
            <Button className="ing-btn edit-btn" variant="light" onClick={deleteIngredientCard}>DELETE</Button>
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
  afterSubmit: PropTypes.func,
};

RecipeIngredientCard.defaultProps = {
  afterSubmit: () => {},
};
