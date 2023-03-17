import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import SelectIngredient from './SelectIngredient';
import IngredientForm from './forms/IngredientForm';

// NEW INGREDIENT MODAL - includes AddIngredientForm, Search/Select Ingredient from Spoonacular Component
export default function NewIngredient({ handleClose, show }) {
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
    <Modal show={show} onHide={handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Search Ingredients For Pantry</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <SelectIngredient handleIngredientId={handleIngredientId} onSubmit={handleSubmit} />
          <IngredientForm select={ingredientId} handleClose={handleSubmitClose} onSubmit={handleSubmit} />
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
}

NewIngredient.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
