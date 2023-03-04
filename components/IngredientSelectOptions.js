import React from 'react';
import PropTypes from 'prop-types';

export default function IngredientSelectOptions({ ingredientObj }) {
  return (
    <option value={ingredientObj.id}>{ingredientObj.name}</option>
  );
}

IngredientSelectOptions.propTypes = {
  ingredientObj: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
