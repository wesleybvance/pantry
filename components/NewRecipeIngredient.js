import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SelectIngredient from './SelectIngredient';
import RecipeIngredientForm from './forms/RecipeIngredientForm';

// NEW INGREDIENT MODAL - includes AddIngredientForm, Search/Select Ingredient from Spoonacular Component
export default function NewRecipeIngredient({ handleClose, show }) {
  const [ingredientId, setIngredientId] = useState(0);
  const handleIngredientId = (id) => {
    setIngredientId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Search Ingredients For Recipe</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <SelectIngredient handleIngredientId={handleIngredientId} />
          <RecipeIngredientForm select={ingredientId} handleClose={handleSubmit} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

NewRecipeIngredient.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
