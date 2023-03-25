import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { deleteSingleIngredient } from '../api/ingredientsData';
import EditIngredient from './EditIngredient';

export default function IngredientCard({ ingredientObj, onUpdate }) {
  const [showIngredientModal, setShowIngredientModal] = useState(false);
  const deleteIngredientCard = () => {
    if (window.confirm(`Delete ${ingredientObj.name}?`)) {
      deleteSingleIngredient(ingredientObj.firebaseKey).then(() => onUpdate());
    }
  };
  const handleClick = () => {
    setShowIngredientModal(true);
  };

  const handleCloseBtn = () => {
    setShowIngredientModal(false);
  };

  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString();
    return formattedDate;
  };

  const isWithinWeek = (date) => {
    const oneWeekAhead = new Date();
    oneWeekAhead.setDate(oneWeekAhead.getDate() + 7);
    return new Date(date) <= oneWeekAhead;
  };

  return (
    <Card className="ingredient-card">
      <div className="ingredient-info">
        <div>
          <Card.Img className="ing-img" src={ingredientObj.photo} />
        </div>
        <div>
          <Card.Body>
            <Card.Title className="ingredient-title">{ingredientObj.name}</Card.Title>
            <Card.Text className="ingredient-details">
              <p>{ingredientObj.amount} {ingredientObj.unit}</p>
              <p className={isWithinWeek(ingredientObj.expiry) ? 'expires-soon' : ''}>{ingredientObj.expiry ? 'expires ' : ''}{ingredientObj.expiry ? (formatDate(ingredientObj.expiry)) : ''}</p>
            </Card.Text>
          </Card.Body>
        </div>
        <div className="ing-btn-cont">
          <Button className="ing-btn edit-btn" variant="light" onClick={handleClick}>EDIT</Button>
          <EditIngredient ingObj={ingredientObj} show={showIngredientModal} handleClose={handleCloseBtn} />
          <Button className="ing-btn delete-btn" variant="light" onClick={deleteIngredientCard}>DELETE</Button>
        </div>
      </div>
    </Card>
  );
}

IngredientCard.propTypes = {
  ingredientObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    amount: PropTypes.number,
    name: PropTypes.string,
    photo: PropTypes.string,
    unit: PropTypes.string,
    uid: PropTypes.string,
    id: PropTypes.number,
    expiry: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
