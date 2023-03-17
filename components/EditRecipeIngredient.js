import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import RecipeIngredientForm from './forms/RecipeIngredientForm';

// EDIT INGREDIENT MODAL - includes AddIngredientForm, Search/Select Ingredient from Spoonacular Component
export default function EditRecipeIngredient({ ingObj, handleClose, show }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubmitClose = () => {
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Edit Recipe Ingredient</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <RecipeIngredientForm handleClose={handleSubmitClose} onSubmit={handleSubmit} obj={ingObj} />
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
}

EditRecipeIngredient.propTypes = {
  ingObj: PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number,
    firebaseKey: PropTypes.string,
    id: PropTypes.number,
    photo: PropTypes.string,
    recipeId: PropTypes.string,
    unit: PropTypes.string,
  }).isRequired,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
