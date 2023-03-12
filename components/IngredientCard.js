import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { deleteSingleIngredient } from '../api/ingredientsData';

export default function IngredientCard({ ingredientObj, onUpdate }) {
  const deleteIngredientCard = () => {
    if (window.confirm(`Delete ${ingredientObj.name}?`)) {
      deleteSingleIngredient(ingredientObj.firebaseKey).then(() => onUpdate());
    }
  };

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
        <div className="ing-btn">
          <Button variant="primary">Edit</Button>
          <Button variant="primary" onClick={deleteIngredientCard}>Delete</Button>
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
    id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
