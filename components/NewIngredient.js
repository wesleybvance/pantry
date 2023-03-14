import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SelectIngredient from './SelectIngredient';
import IngredientForm from './forms/IngredientForm';

// NEW INGREDIENT MODAL - includes AddIngredientForm, Search/Select Ingredient from Spoonacular Component
export default function NewIngredient({ handleClose, show }) {
  const [ingredientId, setIngredientId] = useState(0);
  const handleIngredientId = (id) => {
    setIngredientId(id);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Search Ingredients</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <SelectIngredient handleIngredientId={handleIngredientId} />
          <IngredientForm select={ingredientId} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

NewIngredient.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
