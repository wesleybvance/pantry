import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SelectIngredient from './SelectIngredient';
import IngredientForm from './forms/IngredientForm';

// NEW INGREDIENT MODAL - includes AddIngredientForm, Search/Select Ingredient from Spoonacular Component
export default function EditIngredient({ ingObj, handleClose, show }) {
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
          <Modal.Title>Search Ingredients</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <SelectIngredient handleIngredientId={handleIngredientId} selection={ingObj} />
          <IngredientForm handleClose={handleSubmit} obj={ingObj} select={ingredientId} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

EditIngredient.propTypes = {
  ingObj: PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number,
    firebaseKey: PropTypes.string,
    id: PropTypes.number,
    photo: PropTypes.string,
    uid: PropTypes.string,
    unit: PropTypes.string,
  }).isRequired,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
