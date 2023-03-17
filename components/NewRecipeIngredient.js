import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import SelectIngredient from './SelectIngredient';
import RecipeIngredientForm from './forms/RecipeIngredientForm';

// NEW INGREDIENT MODAL - includes AddIngredientForm, Search/Select Ingredient from Spoonacular Component
export default function NewRecipeIngredient({ handleClose, show }) {
  const [ingredientId, setIngredientId] = useState(0);
  const handleIngredientId = (id) => {
    setIngredientId(id);
  };

  const handleSubmitClose = () => {
    handleClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Modal show={show} onHide={handleClose} onSubmit={handleSubmit}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Search Ingredients For Recipe</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <SelectIngredient handleIngredientId={handleIngredientId} onSubmit={handleSubmit} />
          <RecipeIngredientForm select={ingredientId} handleClose={handleSubmitClose} onSubmit={handleSubmit} />
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
}

NewRecipeIngredient.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
