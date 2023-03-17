/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';

export default function CompareRP({ ingredient, recipeIngredientObj }) {
  if ((ingredient.id === recipeIngredientObj.id) && (ingredient.amount >= recipeIngredientObj.amount)) {
    return (
      <h5>🟢</h5>
    );
  } if ((ingredient.id === recipeIngredientObj.id) && (ingredient.amount < recipeIngredientObj.amount)) {
    return (
      <h5>🟠</h5>
    );
  } return ('');
}

CompareRP.propTypes = {
  recipeIngredientObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    amount: PropTypes.number,
    name: PropTypes.string,
    photo: PropTypes.string,
    unit: PropTypes.string,
    recipeId: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  ingredient: PropTypes.shape({
    firebaseKey: PropTypes.string,
    amount: PropTypes.number,
    name: PropTypes.string,
    photo: PropTypes.string,
    unit: PropTypes.string,
    recipeId: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
