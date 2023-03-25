import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import IngredientForm from './forms/IngredientForm';

// EDIT INGREDIENT MODAL - includes AddIngredientForm, Search/Select Ingredient from Spoonacular Component
export default function EditIngredient({
  ingObj, handleClose, show, afterSubmit,
}) {
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
          <Modal.Title>Edit Ingredient</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <IngredientForm afterSubmit={afterSubmit} handleClose={handleSubmitClose} onSubmit={handleSubmit} obj={ingObj} />
        </Modal.Body>
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
  afterSubmit: PropTypes.func,
};

EditIngredient.defaultProps = {
  afterSubmit: () => {},
};
