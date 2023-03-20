/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function NoMatchRP({ recipeIngredient, pantryIngredients }) {
  const noMatch = !pantryIngredients?.some((ingredient) => ingredient.id === recipeIngredient.id);

  if (noMatch) {
    if (recipeIngredient.id !== 14412) { return <h5>🔴</h5>; }
  } return ('');
}

NoMatchRP.propTypes = {
  recipeIngredient: PropTypes.shape({
    firebaseKey: PropTypes.string,
    amount: PropTypes.number,
    name: PropTypes.string,
    photo: PropTypes.string,
    unit: PropTypes.string,
    recipeId: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  pantryIngredients: PropTypes.array.isRequired,
};
